import { Menu } from '@mui/material';
import AuthStatus from '../auth/AuthStatus';

const ProfileIconMenu = ({ anchorElUser, handleCloseUserMenu }) => {
    return (
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
            <AuthStatus handleCloseUserMenu={handleCloseUserMenu} />
        </Menu>
    );
};

export default ProfileIconMenu;
