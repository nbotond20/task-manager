import * as React from 'react';
import {
    Alert,
    AlertTitle,
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
import PaginationRounded from '../utils/PaginationRounded';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useDocumentTitle from '../utils/useDocumentTitle';
import CardContainer from '../utils/CardContainer';
import Row from './Row';
import Loading from './Loading';
import useTasklistService from '../../services/useTasklistService';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Controller } from 'react-hook-form';

const TaskLists = () => {
    useDocumentTitle('Task-Manager - Tasklists');

    const {
        isOpen,
        currentData,
        loading,
        tasks,
        itemPerPage,
        data,
        page,
        filterOpen,
        id,
        anchorEl,
        control,
        filterData,
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
    } = useTasklistService();

    return (
        <CardContainer>
            <h1
                style={{
                    textAlign: 'center',
                    margin: '0.5 0',
                    position: 'relative'
                }}
            >
                <Button
                    variant={`${filterData ? "contained" : "outlined"}`}
                    color="primary"
                    sx={{
                        position: 'absolute',
                        left: '0',
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
                                            onSubmit={handleSubmit(
                                                onSubmit,
                                                onError
                                            )}
                                            style={{
                                                padding: 30,
                                                width: '500px'
                                            }}
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
                                                        field: {
                                                            onChange,
                                                            value
                                                        },
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
                                                        field: {
                                                            onChange,
                                                            value
                                                        },
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
                                                        field: {
                                                            onChange,
                                                            value
                                                        },
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
                                                        field: {
                                                            onChange,
                                                            value
                                                        },
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
                                                        field: {
                                                            onChange,
                                                            value
                                                        },
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
                                                                            e
                                                                                .tasks
                                                                                .length
                                                                    )
                                                                    .sort(
                                                                        (
                                                                            a,
                                                                            b
                                                                        ) =>
                                                                            a -
                                                                            b
                                                                    )
                                                                    .slice(
                                                                        -1
                                                                    )[0]
                                                            }
                                                        />
                                                    )}
                                                />
                                            </FormGroup>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    gap: '1em'
                                                }}
                                            >
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    onClick={() =>
                                                        handleClear()
                                                    }
                                                >
                                                    Clear
                                                </Button>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Filter
                                                </Button>
                                            </div>
                                        </form>
                                    </Paper>
                                </Fade>
                            </ClickAwayListener>
                        )}
                    </Popper>
                </Dialog>
                Tasklists
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        position: 'absolute',
                        right: '0'
                    }}
                    onClick={() => handleOpen()}
                >
                    New Tasklist
                </Button>
                <Dialog
                    open={isOpen}
                    onClose={() => handleClose()}
                    PaperProps={{
                        style: {
                            backgroundColor: 'transparent',
                            boxShadow: 'none'
                        }
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '1em',
                            backgroundColor: 'transparent',
                            padding: '1em'
                        }}
                    >
                        <Alert severity="warning">
                            <AlertTitle>Warning</AlertTitle>
                            You already have a tasklist selected for editing!
                            You <strong>will lost</strong> your pervious work if
                            you proceed! <br />
                        </Alert>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '1em',
                                backgroundColor: 'transparent'
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleNewOrEdit()}
                            >
                                OK
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleClose()}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Dialog>
            </h1>

            {currentData?.length <= 0 && !loading && (
                <Alert severity="warning">
                    There are no tasklists available - create one!
                </Alert>
            )}
            <Table
                aria-label="collapsible table"
                sx={{
                    boxShadow: 'none',
                    margin: '0',
                    border: '1px solid #e0e0e0'
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Title</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Task Number</TableCell>
                        <TableCell align="right">Created</TableCell>
                        <TableCell align="right">Modified</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!loading &&
                        currentData?.map((row, index) => (
                            <Row
                                key={index}
                                row={row}
                                index={index}
                                tasks={tasks}
                                handleEdit={handleEdit}
                                handleOpenFromRow={handleOpenFromRow}
                                handleDeleteFromRow={handleDeleteFromRow}
                            />
                        ))}
                    {loading && (
                        <>
                            <Loading count={itemPerPage} />
                        </>
                    )}
                </TableBody>
            </Table>

            <div
                style={{
                    display: 'flex',
                    margin: 'auto',
                    justifyContent: 'center',
                    marginTop: '1em'
                }}
            >
                <PaginationRounded
                    count={
                        loading
                            ? 1
                            : filterData
                            ? Math.ceil(
                                  Math.max(filterData.length / itemPerPage, 1)
                              )
                            : data
                            ? Math.ceil(Math.max(data.length / itemPerPage, 1))
                            : 1
                    }
                    onChange={handlePageChange}
                    page={page}
                />
            </div>
        </CardContainer>
    );
};

export default TaskLists;
