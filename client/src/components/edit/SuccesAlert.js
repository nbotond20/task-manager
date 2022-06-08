import { Alert, Snackbar } from '@mui/material';

const SuccesAlert = ({ openSuccessAlert, setOpenSuccessAlert, editing }) => {
    return (
        <Snackbar
            open={openSuccessAlert}
            autoHideDuration={6000}
            onClose={(event, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setOpenSuccessAlert(false);
            }}
        >
            <Alert severity="success" sx={{ width: '100%' }}>
                {editing?.createdAt
                    ? 'Successfully updated the tasklist!'
                    : 'Successfully created the tasklist!'}
            </Alert>
        </Snackbar>
    );
};

export default SuccesAlert;
