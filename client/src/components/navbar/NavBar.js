import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { selectLoggedInUser } from '../../state/auth/authSlice';
import { useSelector } from 'react-redux';
import { selectEdit } from '../../state/edit/editSlice';
import ProfileIcon from './ProfileIcon';
import Burger from './Burger';
import TitleLeft from './TitleLeft';
import TitleCenter from './TitleCenter';
import Navigation from './Navigation';

const NavBar = () => {
    const user = useSelector(selectLoggedInUser);
    const editing = useSelector(selectEdit);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <TitleLeft />
                    <Burger
                        handleOpenNavMenu={handleOpenNavMenu}
                        anchorElNav={anchorElNav}
                        handleCloseNavMenu={handleCloseNavMenu}
                        editing={editing}
                    />
                    <TitleCenter />
                    <Navigation
                        user={user}
                        handleCloseNavMenu={handleCloseNavMenu}
                        editing={editing}
                    />
                    <ProfileIcon
                        user={user}
                        handleOpenUserMenu={handleOpenUserMenu}
                        anchorElUser={anchorElUser}
                        handleCloseUserMenu={handleCloseUserMenu}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
