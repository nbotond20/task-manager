import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toastError from '../actions/toastError';
import toastSuccess from '../actions/toastSuccess';
import { selectLoggedInUser } from '../state/auth/authSlice';
import { addTask, selectEdit, setEditing } from '../state/edit/editSlice';
import {
    useDeleteTaskMutation,
    useGetTasksRangeQuery
} from '../state/tasks/tasksApiSlice';

const useTasksService = ({ itemPerPage }) => {
    const user = useSelector(selectLoggedInUser);
    const editing = useSelector(selectEdit);

    const [page, setPage] = React.useState(1);
    const { data, isLoading } = useGetTasksRangeQuery({
        skip: (page - 1) * itemPerPage,
        limit: itemPerPage
    });
    const [loading, setLoading] = React.useState(true);

    const dispatch = useDispatch();
    const handleSelect = (e, task) => {
        e.stopPropagation();
        if (editing !== null) {
            dispatch(
                addTask({
                    task: { ...task, notes: '', points: 0 }
                })
            );
        } else {
            dispatch(
                setEditing({
                    taskList: {
                        title: null,
                        description: null,
                        status: 'draft',
                        userId: user.id,
                        tasks: [{ ...task, notes: '', points: 0 }]
                    }
                })
            );
        }
    };

    const [expanded, setExpanded] = React.useState(false);
    const handleExpand = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const [deleteTask] = useDeleteTaskMutation();

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        const result = await deleteTask(id);
        if (!result?.error) {
            toastSuccess(`Task deleted successfully!`, 1000);
        } else {
            toastError(`Error deleting task!`, 1000);
        }
    };

    const [search, setSearch] = React.useState('');
    
    const filterdData = React.useMemo(() => {
        return data?.tasks?.filter((task) => {
            return (
                task.title.toLowerCase().includes(search.toLowerCase()) ||
                task.description.toLowerCase().includes(search.toLowerCase())
            );
        });
    }, [data, search]);

    return {
        user,
        editing,
        data,
        page,
        loading,
        isLoading,
        expanded,
        search,
        filterdData,
        handlePageChange,
        setPage,
        setLoading,
        handleSelect,
        handleExpand,
        handleDelete,
        setSearch
    };
};

export default useTasksService;
