import { Alert, AlertTitle, Button, Dialog } from '@mui/material';
import style from './css/TaskLists.module.css';

const Confirmation = ({ isOpen, handleClose, handleNewOrEdit }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={() => handleClose()}
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none'
                }
            }}
        >
            <div className={style.dialogContainer}>
                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    You already have a tasklist selected for editing! You{' '}
                    <strong>will lost</strong> your pervious work if you
                    proceed! <br />
                </Alert>
                <div className={style.dialogButtons}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleNewOrEdit()}
                    >
                        OK
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleClose()}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </Dialog>
    );
};

export default Confirmation;