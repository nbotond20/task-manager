import { Alert, Snackbar } from '@mui/material';

const ErrorAlert = ({ openErrorAlert, setOpenErrorAlert, editing }) => {
    return (
        <Snackbar
            open={openErrorAlert}
            autoHideDuration={6000}
            onClose={(event, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setOpenErrorAlert(false);
            }}
        >
            <Alert severity="error" sx={{ width: '100%' }}>
                {editing?.createdAt
                    ? 'Error updating the tasklist!'
                    : 'Error creating the tasklist!'}
            </Alert>
        </Snackbar>
    );
};

export default ErrorAlert;
