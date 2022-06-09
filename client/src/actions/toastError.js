import { toast } from "react-toastify";

const toastError = (msg='Default message', time=2500) => {
    toast.error(msg, {
        position: 'bottom-left',
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
            background: '#FDEDED',
        }
    });
}

export default toastError;