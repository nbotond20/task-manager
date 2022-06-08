import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../state/auth/authSlice";
import { addTask, selectEdit, setEditing } from "../state/edit/editSlice";
import { useGetTasksRangeQuery } from "../state/tasks/tasksApiSlice";

const useTasksService = ({itemPerPage}) => {
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

    return{
        user,
        editing,
        data,
        page,
        setPage,
        loading,
        setLoading,
        isLoading,
        handleSelect,
        handleExpand,
        handlePageChange,
        expanded
    }
}

export default useTasksService;