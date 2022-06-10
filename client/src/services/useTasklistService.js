import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toastSuccess from '../actions/toastSuccess';
import { selectLoggedInUser } from '../state/auth/authSlice';
import { clear, selectEdit, setEditing } from '../state/edit/editSlice';
import {
    useDeleteTaskListMutation,
    useGetTaskListsQuery
} from '../state/takskslists/tasksListsApiSlice';
import { useGetTasksQuery } from '../state/tasks/tasksApiSlice';

const curData = (filterData, data, user, itemPerPage, page) => {
    return filterData
        ? filterData
              .filter((task) => task.userId === user.id)
              .sort(
                  (a, b) =>
                      new Date(b.updatedAt).getTime() -
                      new Date(a.updatedAt).getTime()
              )
              .slice(page * itemPerPage - itemPerPage, page * itemPerPage)
        : data
        ? data
              .filter((task) => task.userId === user.id)
              .sort(
                  (a, b) =>
                      new Date(b.updatedAt).getTime() -
                      new Date(a.updatedAt).getTime()
              )
              .slice(page * itemPerPage - itemPerPage, page * itemPerPage)
        : [];
};

const useTasklistService = ({itemPerPage}) => {
    const user = useSelector(selectLoggedInUser);

    const { data, isLoading } = useGetTaskListsQuery();
    const [filterData, setFilterData] = useState(null);

    const [currentData, setCurrentData] = useState(
        curData(filterData, data, user, itemPerPage, 1)
    );

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNewTaskList = () => {
        dispatch(
            setEditing({
                taskList: {
                    id: null,
                    title: null,
                    description: null,
                    status: 'draft',
                    userId: user.id,
                    tasks: []
                }
            })
        );
        navigate('/edit');
    };

    const handleEdit = (taskList) => {
        dispatch(setEditing({ taskList }));
        navigate('/edit');
    };

    const { data: tasks } = useGetTasksQuery();

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);


    useEffect(() => {
        setCurrentData(curData(filterData, data, user, itemPerPage, page));
    }, [user, data, filterData, page, itemPerPage]);

    const handlePageChange = (event, value) => {
        setPage(value);
        setCurrentData(curData(filterData, data, user, itemPerPage, value));
    };

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    };

    const editing = useSelector(selectEdit);
    const handleOpen = () => {
        if (editing !== null) {
            setIsOpen(true);
        } else {
            handleNewTaskList();
        }
    };

    const [dataFromRow, setDataFromRow] = useState(null);
    const handleNewOrEdit = () => {
        if (dataFromRow === null) {
            handleNewTaskList();
        } else {
            handleEdit(dataFromRow);
        }
    };

    const handleOpenFromRow = (taskList) => {
        setDataFromRow(taskList);
        if (editing !== null) {
            setIsOpen(true);
        } else {
            handleEdit(taskList);
        }
    };

    const [deleteTaskList] = useDeleteTaskListMutation();
    const handleDeleteFromRow = async (taskListID) => {
        await deleteTaskList(taskListID);
        if (editing?.id === taskListID) {
            dispatch(clear());
        }
        toastSuccess('Successfully deleted the tasklist!', 1000);
    };

    const [filterOpen, setFilterOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleFilterClick = (event) => {
        setAnchorEl(event.currentTarget);
        setFilterOpen((previousOpen) => !previousOpen);
    };

    const handleClickAway = () => {
        setFilterOpen(false);
    };

    const canBeOpen = filterOpen && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            published: false,
            draft: false,
            status: '',
            createdAtFrom: '',
            createdAtTo: '',
            updatedAtFrom: '',
            updatedAtTo: '',
            range: [
                0,
                data
                    ?.map((e) => e.tasks.length)
                    .sort((a, b) => a - b)
                    .slice(-1)[0] || 10
            ]
        }
    });

    const onError = (errors, e) => {};
    const onSubmit = (filter) => {
        let tempData = [
            ...data
                .filter((task) => task.userId === user.id)
                .filter((task) => {
                    let isGood = true;

                    if (!filter?.published || !filter?.draft) {
                        if (filter?.published) {
                            isGood = isGood && task.status === 'published';
                        }
                        if (filter?.draft) {
                            isGood = isGood && task.status === 'draft';
                        }
                    }

                    if (filter?.createdAtFrom) {
                        isGood =
                            isGood &&
                            new Date(task.createdAt).getTime() >=
                                new Date(filter?.createdAtFrom).getTime();
                    }
                    if (filter?.createdAtTo) {
                        isGood =
                            isGood &&
                            new Date(task.createdAt).getTime() <=
                                new Date(filter?.createdAtTo).getTime();
                    }
                    if (filter?.updatedAtFrom) {
                        isGood =
                            isGood &&
                            new Date(task.updatedAt).getTime() >=
                                new Date(filter?.updatedAtFrom).getTime();
                    }
                    if (filter?.updatedAtTo) {
                        isGood =
                            isGood &&
                            new Date(task.updatedAt).getTime() <=
                                new Date(filter?.updatedAtTo).getTime();
                    }

                    if (filter?.range) {
                        isGood =
                            isGood &&
                            task.tasks.length >= filter?.range[0] &&
                            task.tasks.length <= filter?.range[1];
                    }

                    return isGood;
                })
        ];
        setFilterData(tempData);
        setFilterOpen(false);
        setCurrentData(curData(tempData, data, user, itemPerPage, page));
    };

    const handleClear = () => {
        setFilterData(null);
        reset({
            published: false,
            draft: false,
            status: '',
            createdAtFrom: '',
            createdAtTo: '',
            updatedAtFrom: '',
            updatedAtTo: '',
            range: [
                0,
                data
                    ?.map((e) => e.tasks.length)
                    .sort((a, b) => a - b)
                    .slice(-1)[0]
            ]
        });
        setCurrentData(curData(filterData, data, user, itemPerPage, page));
    };

    return {
        isOpen,
        currentData,
        loading,
        tasks,
        data,
        page,
        filterOpen,
        id,
        anchorEl,
        control,
        filterData,
        isLoading,
        setLoading,
        handleFilterClick,
        handleClickAway,
        onSubmit,
        onError,
        handleSubmit,
        handleClear,
        handleOpen,
        handleClose,
        handleNewOrEdit,
        handleEdit,
        handleOpenFromRow,
        handleDeleteFromRow,
        handlePageChange
    };
};

export default useTasklistService;
