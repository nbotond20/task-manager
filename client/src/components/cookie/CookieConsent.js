import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CookieConsent({ open=false }) {
    const [openDialog, setOpenDialog] = React.useState(open);

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleAccept = () => {
        setOpenDialog(false);
        localStorage.setItem('cookieConsent', 'accepted');
    }

    React.useEffect(() => {
        localStorage.getItem('cookieConsent')
            ? setOpenDialog(false)
            : setOpenDialog(true);
    }, []);

    return (
        <Dialog
            open={openDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{'We use cookies!'}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    My website uses cookies necessary for it's basic
                    functioning. By continuing browsing you consent to my use of
                    cookies and other technologies.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleAccept} variant="contained">
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
}
