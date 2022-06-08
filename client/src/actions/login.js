import { login } from "../state/auth/authSlice";

const loginAction = (payload) => {
    localStorage.setItem('token', payload.token);
    localStorage.setItem('user', JSON.stringify(payload.user));

    return login(payload);
};

export default loginAction;