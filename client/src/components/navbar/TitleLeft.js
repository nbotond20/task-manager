import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
};

const TitleLeft = () => {
    return (
        <>
            <TaskAltIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
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

export default TitleLeft;
