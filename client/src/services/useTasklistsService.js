import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clear, selectEdit, updateTasklist } from "../state/edit/editSlice";
import { useCreateTaskListMutation, useModifyTaskListMutation } from "../state/takskslists/tasksListsApiSlice";

const useTasklistsService = () => {
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

    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
    const [openErrorAlert, setOpenErrorAlert] = useState(false);

    const { handleSubmit, control, watch, getValues } = useForm({
        defaultValues: {
            title: editing?.title ? editing?.title : '',
            description: editing?.description ? editing?.description : '',
            status: editing?.status ? editing?.status === 'published' : false
        }
    });

    const onError = (errors, e) => {
        setOpenErrorAlert(true);
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
            setOpenSuccessAlert(true);
            if (isClosing) {
                setTimeout(() => {
                    navigate('/tasklists');
                    dispatch(clear());
                }, 1000);
            } else {
                dispatch(
                    updateTasklist({
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
            setOpenErrorAlert(true);
        }
    };

    return {
        editing,
        handleSubmit,
        control,
        watch,
        getValues,
        onError,
        onSubmit,
        openSuccessAlert,
        setOpenSuccessAlert,
        openErrorAlert,
        setOpenErrorAlert,
        isClosing,
        setIsClosing,
        tasks
    }
};

export default useTasklistsService;
