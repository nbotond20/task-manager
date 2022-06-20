import { login } from '../state/auth/authSlice';

const loginAction = (payload) => {
    localStorage.setItem('token', payload.token);
    localStorage.setItem(
        'user',
        JSON.stringify({
            fullname: payload.user.fullname,
            id: payload.user.id,
            email: payload.user.email
        })
    );
    return login(payload);
};

export default loginAction;
