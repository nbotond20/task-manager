import { Button } from '@mui/material';
import style from './css/Edit.module.css';

const Buttons = ({ setIsClosing, cancel }) => {
    return (
        <div className={style.buttonContainer}>
            <Button
                variant="contained"
                type="submit"
                onClick={() => setIsClosing(false)}
            >
                Save
            </Button>
            <Button
                type="submit"
                onClick={() => setIsClosing(true)}
                variant="contained"
            >
                Save & Close
            </Button>
            <Button
                onClick={() => cancel(true)}
                variant="outlined"
                style={{
                    position: 'absolute',
                    right: '1em'
                }}
            >
                Cancel
            </Button>
        </div>
    );
};

export default Buttons;
