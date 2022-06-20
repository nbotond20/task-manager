import {
    Alert,
    FormControl,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import style from './css/Edit.module.css';
import DeleteIcon from '@mui/icons-material/Delete';

const EditTable = ({
    tasks,
    control,
    setIsClosing,
    onSubmit,
    handleDelete,
    handlePageChange
}) => {
    return (
        <div className={style.tableContainer}>
            <TableContainer component={Paper}>
                {tasks?.length > 0 ? (
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Description</TableCell>
                                <TableCell align="center">Notes</TableCell>
                                <TableCell align="center">Points</TableCell>
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
                                                defaultValue={task.notes}
                                                render={({
                                                    field: { onChange, value },
                                                    fieldState: { error }
                                                }) => (
                                                    <FormControl variant="filled">
                                                        <TextField
                                                            label="Notes"
                                                            variant="filled"
                                                            value={value}
                                                            onChange={onChange}
                                                            error={!!error}
                                                            multiline
                                                            maxRows={3}
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
                                        <TableCell
                                            align="center"
                                            style={{
                                                padding: '0'
                                            }}
                                        >
                                            <Controller
                                                name={`task-points[${task.id}]`}
                                                control={control}
                                                rules={{
                                                    min: '0'
                                                }}
                                                defaultValue={task.points}
                                                render={({
                                                    field: { onChange, value },
                                                    fieldState: { error }
                                                }) => (
                                                    <FormControl variant="filled">
                                                        <TextField
                                                            label="Points"
                                                            variant="filled"
                                                            type="number"
                                                            value={value}
                                                            onChange={onChange}
                                                            error={!!error}
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

                                        <TableCell
                                            style={{
                                                padding: '0 1em 0 0'
                                            }}
                                        >
                                            <DeleteIcon
                                                color="error"
                                                onClick={() =>
                                                    handleDelete(task.id)
                                                }
                                                style={{
                                                    cursor: 'pointer'
                                                }}
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
                                handlePageChange();
                            }}
                        >
                            add one
                        </Link>
                        !
                    </Alert>
                )}
            </TableContainer>
        </div>
    );
};

export default EditTable;
