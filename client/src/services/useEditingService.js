import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toastError from '../actions/toastError';
import toastSuccess from '../actions/toastSuccess';
import {
    clear,
    selectEdit,
    selectUserId,
    setEditing
} from '../state/edit/editSlice';
import {
    useCreateTaskListMutation,
    useModifyTaskListMutation
} from '../state/takskslists/tasksListsApiSlice';

const useEditingService = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const editing = useSelector(selectEdit);

    const tasks = editing?.tasks
        ? editing?.tasks?.map((e) => ({
              id: e.id,
              title: e.title,
              description: e.description,
              notes: e.notes,
              points: e.points
          }))
        : [];

    const [createTaskList] = useCreateTaskListMutation();
    const [modifyTaskList] = useModifyTaskListMutation();

    const { handleSubmit, control, watch, getValues } = useForm({
        defaultValues: {
            title: editing?.title ? editing?.title : '',
            description: editing?.description ? editing?.description : '',
            status: editing?.status ? editing?.status === 'published' : false
        }
    });

    const onError = (errors, e) => {
        toastError(`Error ${editing?.id ? 'updating' : 'creating'} tasklist!`);
    };

    const [isClosing, setIsClosing] = useState(false);
    const onSubmit = async () => {
        let result = null;
        try {
            if (!editing?.id) {
                result = await createTaskList({
                    strategy: 'local',
                    title: getValues('title'),
                    description: getValues('description'),
                    status: getValues('status') ? 'published' : 'draft',
                    tasks: tasks?.map((e) => ({
                        id: e.id,
                        title: e.title,
                        description: e.description,
                        notes: getValues(`task-notes[${e.id}]`),
                        points: parseInt(getValues(`task-points[${e.id}]`))
                    }))
                }).unwrap();
            } else {
                result = await modifyTaskList({
                    id: editing?.id,
                    body: {
                        strategy: 'local',
                        title: getValues('title'),
                        description: getValues('description'),
                        status: getValues('status') ? 'published' : 'draft',
                        tasks: tasks?.map((e) => ({
                            id: e.id,
                            title: e.title,
                            description: e.description,
                            notes: getValues(`task-notes[${e.id}]`),
                            points: parseInt(getValues(`task-points[${e.id}]`))
                        }))
                    }
                }).unwrap();
            }
        } catch (e) {}

        if (result) {
            toastSuccess(
                `Tasklist ${editing?.id ? 'updated' : 'created'} successfully!`
            );
            if (isClosing) {
                cancel();
            } else {
                dispatch(
                    setEditing({
                        taskList: {
                            id: result?.id,
                            title: getValues('title'),
                            description: getValues('description'),
                            status: getValues('status') ? 'published' : 'draft',
                            createdAt: result?.createdAt,
                            updatedAt: result?.updatedAt,
                            tasks: tasks?.map((e) => ({
                                id: e.id,
                                title: e.title,
                                description: e.description,
                                notes: getValues(`task-notes[${e.id}]`),
                                points: parseInt(
                                    getValues(`task-points[${e.id}]`)
                                )
                            }))
                        }
                    })
                );
            }
        } else {
            toastError(
                `Error ${editing?.id ? 'updating' : 'creating'} tasklist!`
            );
        }
    };

    const userId = useSelector(selectUserId);
    const cancel = () => {
        localStorage.removeItem(`taskList-${userId}`);
        dispatch(clear());
        navigate('/tasklists');
    };

    const handleDelete = (id) => {
        dispatch(
            setEditing({
                taskList: {
                    id: editing.id,
                    title: getValues('title'),
                    description: getValues('description'),
                    status: getValues('status') ? 'published' : 'draft',
                    createdAt: editing.createdAt,
                    updatedAt: editing.updatedAt,
                    tasks: tasks
                        ?.map((e) => ({
                            id: e.id,
                            title: e.title,
                            description: e.description,
                            notes: getValues(`task-notes[${e.id}]`),
                            points: parseInt(getValues(`task-points[${e.id}]`))
                        }))
                        .filter((e) => e.id !== id)
                }
            })
        );
    };

    const handlePageChange = () => {
        dispatch(
            setEditing({
                taskList: {
                    id: editing.id,
                    title: getValues('title'),
                    description: getValues('description'),
                    status: getValues('status') ? 'published' : 'draft',
                    createdAt: editing.createdAt,
                    updatedAt: editing.updatedAt,
                    tasks: tasks?.map((e) => ({
                        id: e.id,
                        title: e.title,
                        description: e.description,
                        notes: getValues(`task-notes[${e.id}]`),
                        points: parseInt(getValues(`task-points[${e.id}]`))
                    }))
                }
            })
        );
        navigate('/tasklists');
    };

    return {
        editing,
        control,
        isClosing,
        tasks,
        cancel,
        handleSubmit,
        getValues,
        watch,
        onError,
        onSubmit,
        setIsClosing,
        handleDelete,
        handlePageChange
    };
};

export default useEditingService;
