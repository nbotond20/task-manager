import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
};

const TitleCenter = () => {
    return (
        <>
            <TaskAltIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none'
                }}
            >
                <Link to={'/'} style={linkStyle}>
                    Task-Manager
                </Link>
            </Typography>
        </>
    );
};

export default TitleCenter;
