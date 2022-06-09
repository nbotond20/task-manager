import { Box, Button, Chip, Collapse, Grow, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReactTimeAgo from "react-time-ago";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import {v4} from "uuid";

const Row = ({
    row,
    index,
    tasks,
    children,
    handleOpenFromRow,
    handleDeleteFromRow
}) => {
    const [open, setOpen] = React.useState(false);

    function compare(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    }

    return (
        <>
            {row && tasks && (
                <>
                    <Grow
                        direction="up"
                        in={true}
                        {...(true ? { timeout: 250 * (index + 1) } : {})}
                    >
                        <TableRow sx={{ borderCollapse: 'collapse' }}>
                            <TableCell>
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={() => setOpen(!open)}
                                >
                                    {open ? (
                                        <KeyboardArrowUpIcon />
                                    ) : (
                                        <KeyboardArrowDownIcon />
                                    )}
                                </IconButton>
                                {children}
                            </TableCell>
                            <TableCell
                                component="th"
                                scope="row"
                                style={{
                                    wrap: 'nowrap'
                                }}
                            >
                                {row.title}
                            </TableCell>
                            <TableCell
                                align="center"
                                style={{
                                    color:
                                        row.status === 'published'
                                            ? '#77DD77'
                                            : 'text.secondary'
                                }}
                            >
                                {row.status === 'published' ? (
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
                            </TableCell>
                            <TableCell align="center">
                                {row.tasks?.length}
                            </TableCell>
                            <TableCell align="right">
                                {new Date(row.createdAt).toLocaleString()}
                            </TableCell>
                            <TableCell align="right">
                                <ReactTimeAgo date={new Date(row.updatedAt)} />
                            </TableCell>
                            <TableCell align="center" sx={{ padding: '0' }}>
                                <Button onClick={() => handleOpenFromRow(row)}>
                                    <EditIcon />
                                </Button>
                                <Button
                                    onClick={() => handleDeleteFromRow(row.id)}
                                >
                                    <DeleteIcon color="error" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    </Grow>
                    <TableRow>
                        <TableCell
                            style={{ paddingBottom: 0, paddingTop: 0 }}
                            colSpan={7}
                        >
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Box sx={{ margin: 1 }}>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        component="div"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        Description
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        component="div"
                                        gutterBottom
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        {row.description}
                                    </Typography>
                                </Box>
                                <Box sx={{ margin: 1 }}>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        component="div"
                                    >
                                        Tasks
                                    </Typography>
                                    <Table size="small" aria-label="purchases">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Title</TableCell>
                                                <TableCell>
                                                    Description
                                                </TableCell>
                                                <TableCell align="left">
                                                    Notes
                                                </TableCell>
                                                <TableCell align="right">
                                                    Points
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {row.tasks
                                                .map((e) => e)
                                                .sort(compare)
                                                .map((task) => {
                                                    return (
                                                        <TableRow key={task.id}>
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                sx={{
                                                                    color: 'text.secondary'
                                                                }}
                                                            >
                                                                {task.title}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    color: 'text.secondary'
                                                                }}
                                                            >
                                                                {
                                                                    task.description
                                                                }
                                                            </TableCell>
                                                            <TableCell
                                                                align="right"
                                                                sx={{
                                                                    color: 'text.secondary'
                                                                }}
                                                            >
                                                                {task.notes}
                                                            </TableCell>
                                                            <TableCell
                                                                align="right"
                                                                sx={{
                                                                    color: 'text.secondary'
                                                                }}
                                                            >
                                                                {task.points}
                                                            </TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            <TableRow
                                                key={v4()}
                                                sx={{
                                                    boder: 'none',
                                                    boxShadow: 'none'
                                                }}
                                            >
                                                <TableCell
                                                    scope="row"
                                                    sx={{
                                                        borderBottom: 'none'
                                                    }}
                                                />
                                                <TableCell
                                                    sx={{
                                                        borderBottom: 'none'
                                                    }}
                                                />
                                                <TableCell
                                                    align="right"
                                                    sx={{
                                                        borderBottom: 'none'
                                                    }}
                                                />
                                                <TableCell
                                                    align="right"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        borderBottom: 'none'
                                                    }}
                                                >
                                                    Summary:{' '}
                                                    {row.tasks.reduce(
                                                        (acc, task) =>
                                                            acc + task.points,
                                                        0
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                </>
            )}
        </>
    );
};

export default Row;