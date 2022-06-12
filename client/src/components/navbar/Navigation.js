import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logoutAction from '../../actions/logout';
import './css/ActiveLink.css';

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
};

const Navigation = ({ user, handleCloseNavMenu, editing }) => {
    const dispatch = useDispatch();

    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    gap: '1em'
                }}
            >
                <NavLink to={'/tasks'} style={linkStyle}>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            color: 'white',
                            display: 'block'
                        }}
                    >
                        Tasks
                    </Button>
                </NavLink>
                {user ? (
                    <>
                        <NavLink to={'/tasklists'} style={linkStyle}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block'
                                }}
                            >
                                Tasklists
                            </Button>
                        </NavLink>
                        {editing !== null && (
                            <NavLink to={'/edit'} style={linkStyle}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block'
                                    }}
                                >
                                    Edit
                                </Button>
                            </NavLink>
                        )}
                    </>
                ) : (
                    ''
                )}
            </Box>
            {user ? (
                <Link to={'/'} style={linkStyle}>
                    <Button
                        onClick={() => {
                            handleCloseNavMenu();
                            dispatch(logoutAction());
                        }}
                        sx={{
                            my: 2,
                            color: 'lightgray',
                            display: 'block',
                            marginInline: '0.5em'
                        }}
                    >
                        Log out
                    </Button>
                </Link>
            ) : (
                <>
                    <NavLink to={'/login'} style={linkStyle}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                color: 'lightgray',
                                display: 'block',
                                marginInline: '0.5em'
                            }}
                        >
                            Login
                        </Button>
                    </NavLink>
                    /
                    <NavLink to={'/register'} style={linkStyle}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                color: 'lightgray',
                                display: 'block',
                                marginInline: '0.5em'
                            }}
                        >
                            Register
                        </Button>
                    </NavLink>
                </>
            )}
        </>
    );
};

export default Navigation;
