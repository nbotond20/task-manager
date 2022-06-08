import {
    Alert,
    Button,
    Chip,
    FormControl,
    Paper,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from '@mui/material';
import CardContainer from '../utils/CardContainer';
import ReactTimeAgo from 'react-time-ago';
import { Link } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import ErrorAlert from './ErrorAlert';
import SuccesAlert from './SuccesAlert';
import useTasklistsService from '../../services/useTasklistsService';

const Edit = () => {
    const {
        editing,
        control,
        openSuccessAlert,
        openErrorAlert,
        tasks,
        setIsClosing,
        onSubmit,
        handleSubmit,
        watch,
        onError,
        setOpenSuccessAlert,
        setOpenErrorAlert
    } = useTasklistsService();

    return (
        <>
            <SuccesAlert
                openSuccessAlert={openSuccessAlert}
                setOpenSuccessAlert={setOpenSuccessAlert}
                editing={editing}
            />
            <ErrorAlert
                openErrorAlert={openErrorAlert}
                setOpenErrorAlert={setOpenErrorAlert}
                editing={editing}
            />
            <CardContainer>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '2rem'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '80%'
                            }}
                        >
                            <Controller
                                name="title"
                                control={control}
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error }
                                }) => (
                                    <FormControl fullWidth variant="filled">
                                        <TextField
                                            label="Title"
                                            variant="filled"
                                            value={value}
                                            onChange={onChange}
                                            error={!!error}
                                            helperText={
                                                error ? error.message : null
                                            }
                                        />
                                    </FormControl>
                                )}
                                rules={{ required: 'Title is required' }}
                            />
                            <Controller
                                sx={{
                                    marginTop: '1rem'
                                }}
                                name="description"
                                control={control}
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error }
                                }) => (
                                    <FormControl fullWidth variant="filled">
                                        <TextField
                                            label="Description"
                                            variant="filled"
                                            value={value}
                                            onChange={onChange}
                                            error={!!error}
                                            multiline
                                            maxRows={5}
                                            helperText={
                                                error ? error.message : null
                                            }
                                        />
                                    </FormControl>
                                )}
                            />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '20%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: '1  em'
                            }}
                        >
                            <Controller
                                name="status"
                                control={control}
                                render={({ field }) => (
                                    <Switch {...field} checked={field.value} />
                                )}
                            />
                            {watch('status') ? (
                                <Chip
                                    label="Published"
                                    color="success"
                                    variant="outlined"
                                />
                            ) : (
                                <Chip
                                    label="Draft"
                                    color="primary"
                                    variant="outlined"
                                />
                            )}
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            marginBottom: '2rem'
                        }}
                    >
                        <span>
                            Created at:
                            {editing?.createdAt && (
                                <span
                                    style={{
                                        color: '#666'
                                    }}
                                >
                                    {' ' +
                                        new Date(
                                            editing?.createdAt
                                        ).toLocaleString()}
                                </span>
                            )}
                        </span>
                        <span>
                            Updated at:
                            {editing?.updatedAt && (
                                <span
                                    style={{
                                        color: '#666'
                                    }}
                                >
                                    {' '}
                                    <ReactTimeAgo
                                        date={new Date(editing?.updatedAt)}
                                    />
                                </span>
                            )}
                        </span>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            marginBottom: '2rem'
                        }}
                    >
                        <TableContainer component={Paper}>
                            {tasks?.length > 0 ? (
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">
                                                Title
                                            </TableCell>
                                            <TableCell align="left">
                                                Description
                                            </TableCell>
                                            <TableCell align="center">
                                                Notes
                                            </TableCell>
                                            <TableCell align="center">
                                                Points
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {tasks &&
                                            tasks?.map((task) => (
                                                <TableRow key={task.id}>
                                                    <TableCell align="left">
                                                        {task.title}
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        {task.description}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <Controller
                                                            name={`task-notes[${task.id}]`}
                                                            control={control}
                                                            defaultValue={
                                                                task.notes
                                                            }
                                                            render={({
                                                                field: {
                                                                    onChange,
                                                                    value
                                                                },
                                                                fieldState: {
                                                                    error
                                                                }
                                                            }) => (
                                                                <FormControl variant="filled">
                                                                    <TextField
                                                                        label="Notes"
                                                                        variant="filled"
                                                                        value={
                                                                            value
                                                                        }
                                                                        onChange={
                                                                            onChange
                                                                        }
                                                                        error={
                                                                            !!error
                                                                        }
                                                                        multiline
                                                                        maxRows={
                                                                            3
                                                                        }
                                                                        helperText={
                                                                            error
                                                                                ? error.message
                                                                                : null
                                                                        }
                                                                    />
                                                                </FormControl>
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <Controller
                                                            name={`task-points[${task.id}]`}
                                                            control={control}
                                                            rules={{
                                                                min: '0'
                                                            }}
                                                            defaultValue={
                                                                task.points
                                                            }
                                                            render={({
                                                                field: {
                                                                    onChange,
                                                                    value
                                                                },
                                                                fieldState: {
                                                                    error
                                                                }
                                                            }) => (
                                                                <FormControl variant="filled">
                                                                    <TextField
                                                                        label="Points"
                                                                        variant="filled"
                                                                        type="number"
                                                                        value={
                                                                            value
                                                                        }
                                                                        onChange={
                                                                            onChange
                                                                        }
                                                                        error={
                                                                            !!error
                                                                        }
                                                                        helperText={
                                                                            error
                                                                                ? 'Points must be a positive number'
                                                                                : null
                                                                        }
                                                                    />
                                                                </FormControl>
                                                            )}
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            ) : (
                                <Alert severity="warning">
                                    There are no tasks added yet -{' '}
                                    <Link
                                        to="/tasks"
                                        onClick={() => {
                                            setIsClosing(false);
                                            onSubmit();
                                        }}
                                    >
                                        add one
                                    </Link>
                                    !
                                </Alert>
                            )}
                        </TableContainer>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem'
                        }}
                    >
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={() => setIsClosing(false)}
                        >
                            Save
                        </Button>
                        <Button
                            type="submit"
                            onClick={() => setIsClosing(true)}
                            variant="contained"
                        >
                            Close
                        </Button>
                    </div>
                </form>
            </CardContainer>
        </>
    );
};

export default Edit;
