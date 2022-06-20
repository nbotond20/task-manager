import { Grow, IconButton, Skeleton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Loading = ({ count }) => {
    const list = Array.from(Array(count).keys());
    return (
        <>
            {list.map((e, index) => (
                <Grow
                    direction="up"
                    in={true}
                    {...(true ? { timeout: 250 * (index + 1)  } : {})}
                    key={index}
                >
                    <TableRow
                        sx={{ '& > *': { borderBottom: 'unset' } }}
                        key={index}
                    >
                        <TableCell>
                            <IconButton aria-label="expand row" size="small">
                                <KeyboardArrowDownIcon color="secondary"/>
                            </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <Skeleton variant="text" width={'100%'} />
                        </TableCell>
                        <TableCell align="center">
                            <Skeleton variant="text" width={'100%'} />
                        </TableCell>
                        <TableCell align="center">
                            <Skeleton variant="text" width={'100%'} />
                        </TableCell>
                        <TableCell align="right">
                            <Skeleton variant="text" width={'100%'} />
                        </TableCell>
                        <TableCell align="right">
                            <Skeleton variant="text" width={'100%'} />
                        </TableCell>
                        <TableCell align="right">
                            <Skeleton variant="text" width={'100%'} />
                        </TableCell>
                    </TableRow>
                </Grow>
            ))}
        </>
    );
};

export default Loading;