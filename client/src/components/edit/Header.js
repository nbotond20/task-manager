import { Chip, FormControl, Switch, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import ReactTimeAgo from 'react-time-ago';
import style from './css/Edit.module.css';

const Header = ({ control, watch, editing }) => {
    return (
        <>
            <div className={style.container}>
                <div className={style.titleContainer}>
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
                                    helperText={error ? error.message : null}
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
                                    helperText={error ? error.message : null}
                                />
                            </FormControl>
                        )}
                    />
                </div>

                <div className={style.statusContainer}>
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

            <div className={style.timeContainer}>
                <span>
                    Created at:
                    {editing?.createdAt && (
                        <span>
                            {' ' +
                                new Date(editing?.createdAt).toLocaleString()}
                        </span>
                    )}
                </span>
                <span>
                    Updated at:
                    {editing?.updatedAt && (
                        <span>
                            {' '}
                            <ReactTimeAgo date={new Date(editing?.updatedAt)} />
                        </span>
                    )}
                </span>
            </div>
        </>
    );
};

export default Header;
