import { toast } from 'react-toastify';

const toastSuccess = (msg = 'Default message', time = 2500) => {
    toast.success(msg, {
        position: 'bottom-left',
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
            background: '#EDF7ED'
        }
    });
};

export default toastSuccess;
