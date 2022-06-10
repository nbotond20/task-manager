import {
    Button,
    Checkbox,
    ClickAwayListener,
    Dialog,
    Fade,
    FormControlLabel,
    FormGroup,
    Paper,
    Popper,
    Slider,
    TextField,
    Typography
} from '@mui/material';
import { Controller } from 'react-hook-form';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import style from './css/TaskLists.module.css';

const Filter = ({
    filterData,
    handleFilterClick,
    filterOpen,
    id,
    anchorEl,
    handleClickAway,
    handleSubmit,
    onSubmit,
    onError,
    control,
    handleClear,
    data
}) => {
    return <>
        <Button
            variant={`${filterData ? 'contained' : 'outlined'}`}
            color="primary"
            sx={{
                position: 'absolute',
                left: '0'
            }}
            onClick={(e) => handleFilterClick(e)}
        >
            <FilterListIcon />
            Filter
            {filterOpen ? (
                <KeyboardArrowDownIcon />
            ) : (
                <KeyboardArrowRightIcon />
            )}
        </Button>
        <Dialog
            open={filterOpen}
            sx={{
                zIndex: '0'
            }}
        >
            <Popper
                id={id}
                placement="bottom-start"
                anchorEl={anchorEl}
                open={filterOpen}
                transition
            >
                {({ TransitionProps }) => (
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <form
                                    onSubmit={handleSubmit(onSubmit, onError)}
                                    className={style.form}
                                >
                                    <Typography
                                        sx={{
                                            marginTop: '5px',
                                            marginBottom: '15px'
                                        }}
                                        variant="h6"
                                    >
                                        Filters
                                    </Typography>
                                    <Typography
                                        sx={{
                                            marginBottom: '7px'
                                        }}
                                        variant="subheading"
                                    >
                                        Status
                                    </Typography>

                                    <FormGroup
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '1em'
                                        }}
                                    >
                                        <Controller
                                            name="published"
                                            control={control}
                                            render={({ field }) => (
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            {...field}
                                                            checked={
                                                                field.value
                                                            }
                                                        />
                                                    }
                                                    label="Published"
                                                />
                                            )}
                                        />
                                        <Controller
                                            name="draft"
                                            control={control}
                                            render={({ field }) => (
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            {...field}
                                                            checked={
                                                                field.value
                                                            }
                                                        />
                                                    }
                                                    label="Draft"
                                                />
                                            )}
                                        />
                                    </FormGroup>

                                    <Typography
                                        sx={{
                                            marginBottom: '7px'
                                        }}
                                        variant="subheading"
                                    >
                                        Created At
                                    </Typography>

                                    <FormGroup
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '1em',
                                            padding: '1em 0'
                                        }}
                                    >
                                        <Controller
                                            name="createdAtFrom"
                                            control={control}
                                            render={({
                                                field: { onChange, value },
                                                fieldState: { error }
                                            }) => (
                                                <TextField
                                                    id="createdAtFrom"
                                                    label="From"
                                                    type="datetime-local"
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    variant="outlined"
                                                    value={value}
                                                    onChange={onChange}
                                                    error={!!error}
                                                    helperText={
                                                        error
                                                            ? error.message
                                                            : null
                                                    }
                                                />
                                            )}
                                        />
                                        <p>-</p>
                                        <Controller
                                            name="createdAtTo"
                                            control={control}
                                            render={({
                                                field: { onChange, value },
                                                fieldState: { error }
                                            }) => (
                                                <TextField
                                                    id="createdAtTo"
                                                    label="To"
                                                    type="datetime-local"
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    variant="outlined"
                                                    value={value}
                                                    onChange={onChange}
                                                    error={!!error}
                                                    helperText={
                                                        error
                                                            ? error.message
                                                            : null
                                                    }
                                                />
                                            )}
                                        />
                                    </FormGroup>

                                    <Typography
                                        sx={{
                                            marginBottom: '7px'
                                        }}
                                        variant="subheading"
                                    >
                                        Updated At
                                    </Typography>

                                    <FormGroup
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '1em',
                                            padding: '1em 0'
                                        }}
                                    >
                                        <Controller
                                            name="updatedAtFrom"
                                            control={control}
                                            render={({
                                                field: { onChange, value },
                                                fieldState: { error }
                                            }) => (
                                                <TextField
                                                    id="updatedAtFrom"
                                                    label="From"
                                                    type="datetime-local"
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    variant="outlined"
                                                    value={value}
                                                    onChange={onChange}
                                                    error={!!error}
                                                    helperText={
                                                        error
                                                            ? error.message
                                                            : null
                                                    }
                                                />
                                            )}
                                        />
                                        <p>-</p>
                                        <Controller
                                            name="updatedAtTo"
                                            control={control}
                                            render={({
                                                field: { onChange, value },
                                                fieldState: { error }
                                            }) => (
                                                <TextField
                                                    id="updatedAtTo"
                                                    label="To"
                                                    type="datetime-local"
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    variant="outlined"
                                                    value={value}
                                                    onChange={onChange}
                                                    error={!!error}
                                                    helperText={
                                                        error
                                                            ? error.message
                                                            : null
                                                    }
                                                />
                                            )}
                                        />
                                    </FormGroup>

                                    <Typography
                                        sx={{
                                            marginBottom: '7px'
                                        }}
                                        variant="subheading"
                                    >
                                        Task Number
                                    </Typography>

                                    <FormGroup
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '1em',
                                            padding: '1em 0'
                                        }}
                                    >
                                        <Controller
                                            name="range"
                                            control={control}
                                            render={({
                                                field: { onChange, value },
                                                fieldState: { error }
                                            }) => (
                                                <Slider
                                                    getAriaLabel={() =>
                                                        'Temperature range'
                                                    }
                                                    value={value}
                                                    onChange={onChange}
                                                    valueLabelDisplay="auto"
                                                    aria-labelledby="range-slider"
                                                    step={1}
                                                    max={
                                                        data
                                                            ?.map(
                                                                (e) =>
                                                                    e.tasks
                                                                        .length
                                                            )
                                                            .sort(
                                                                (a, b) => a - b
                                                            )
                                                            .slice(-1)[0]
                                                    }
                                                />
                                            )}
                                        />
                                    </FormGroup>
                                    <div className={style.filterButtons}>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => handleClear()}
                                        >
                                            Clear
                                        </Button>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Apply
                                        </Button>
                                    </div>
                                </form>
                            </Paper>
                        </Fade>
                    </ClickAwayListener>
                )}
            </Popper>
        </Dialog>
    </>;
};

export default Filter;
