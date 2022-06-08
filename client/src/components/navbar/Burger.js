import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
};

const Burger = ({
    handleOpenNavMenu,
    anchorElNav,
    handleCloseNavMenu,
    editing
}) => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' }
            }}
        >
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' }
                }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                        <Link to={'/tasks'} style={linkStyle}>
                            Tasks
                        </Link>
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                        <Link to={'/tasklists'} style={linkStyle}>
                            TaskLists
                        </Link>
                    </Typography>
                </MenuItem>
                {editing !== null && (
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">
                            <Link to={'/last-edited'} style={linkStyle}>
                                Last Edited
                            </Link>
                        </Typography>
                    </MenuItem>
                )}
            </Menu>
        </Box>
    );
};

export default Burger;
