import { Avatar, IconButton, Tooltip } from '@mui/material';

const ProfileIconTooltip = ({ handleOpenUserMenu, user }) => {
    return (
        <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                    children={
                        user
                            ? `${user?.fullname.split(' ')[0][0]}${
                                  user?.fullname.split(' ')[1][0]
                              }`
                            : 'AA'
                    }
                />
            </IconButton>
        </Tooltip>
    );
};

export default ProfileIconTooltip;
