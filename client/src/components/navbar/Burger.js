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
                <Link to={'/tasks'} style={linkStyle}>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Tasks</Typography>
                    </MenuItem>
                </Link>
                <Link to={'/tasklists'} style={linkStyle}>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">TaskLists</Typography>
                    </MenuItem>
                </Link>
                {editing !== null && (
                    <Link to={'/edit'} style={linkStyle}>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">Edit</Typography>
                        </MenuItem>
                    </Link>
                )}
            </Menu>
        </Box>
    );
};

export default Burger;
