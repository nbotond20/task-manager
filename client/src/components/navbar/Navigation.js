import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logoutAction from '../../actions/logout';

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
                    display: { xs: 'none', md: 'flex' }
                }}
            >
                <Link to={'/tasks'} style={linkStyle}>
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
                </Link>
                {user ? (
                    <>
                        <Link to={'/tasklists'} style={linkStyle}>
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
                        </Link>
                        {editing !== null && (
                            <Link to={'/last-edited'} style={linkStyle}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block'
                                    }}
                                >
                                    Last Edited
                                </Button>
                            </Link>
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
                            display: 'block'
                        }}
                    >
                        Log out
                    </Button>
                </Link>
            ) : (
                <>
                    <Link to={'/login'} style={linkStyle}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                color: 'lightgray',
                                display: 'block'
                            }}
                        >
                            Login
                        </Button>
                    </Link>
                    /
                    <Link to={'/register'} style={linkStyle}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                color: 'lightgray',
                                display: 'block'
                            }}
                        >
                            Register
                        </Button>
                    </Link>
                </>
            )}
        </>
    );
};

export default Navigation;
