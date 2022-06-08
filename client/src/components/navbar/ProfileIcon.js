import { Box } from '@mui/system';
import ProfileIconMenu from './ProfileIconMenu';
import ProfileIconTooltip from './ProfileIconTooltip';

const ProfileIcon = ({
    user,
    handleOpenUserMenu,
    anchorElUser,
    handleCloseUserMenu
}) => {

    return (

        <Box sx={{ flexGrow: 0 }}>
            <ProfileIconTooltip
                user={user}
                handleOpenUserMenu={handleOpenUserMenu}
            />
            <ProfileIconMenu
                anchorElUser={anchorElUser}
                handleCloseUserMenu={handleCloseUserMenu}
            />
        </Box>
    );
};

export default ProfileIcon;
