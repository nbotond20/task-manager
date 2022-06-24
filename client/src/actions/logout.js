import { logout } from '../state/auth/authSlice';

const logoutAction = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    return logout();
};

export default logoutAction;
