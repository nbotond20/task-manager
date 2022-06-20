import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../state/auth/authApiSlice';
import style from './css/Login.module.css';
import CenterContainer from '../utils/CenterContainer';
import useDocumentTitle from '../utils/useDocumentTitle';
import { setUserId } from '../../state/edit/editSlice';
import loginAction from '../../actions/login';
import loadTasklist from '../../actions/loadTasklist';
import AnimatedDiv from '../utils/AnimatedDiv';
import { selectLoggedInUser } from '../../state/auth/authSlice';

const Login = () => {
    const user = useSelector(selectLoggedInUser);

    useDocumentTitle('Task-Manager - Login');
    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const [authLogin] = useLoginMutation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password } = data;
        const newErrors = {};

        if (username === '') {
            newErrors.username = 'Username is required';
        }
        if (password === '') {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        if (Object.values(newErrors).length > 0) {
            return;
        }

        try {
            const result = await authLogin({
                strategy: 'local',
                email: username,
                password: password
            }).unwrap();
            dispatch(
                loginAction({
                    user: result.user,
                    token: result.accessToken
                })
            );
            dispatch(setUserId({ userId: result.user.id }));
            dispatch(loadTasklist(result.user.id));
            navigate('/', { replace: true });
        } catch (err) {
            newErrors.username = 'Login error';
            setErrors({ ...newErrors });
        }
    };

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/', { replace: true });
        }
    }, [navigate]);

    if (user) {
        return <Navigate to="/" />;
    }

    return (
        <AnimatedDiv>
            <CenterContainer className={style.container}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <h1 className={style.title}>Login</h1>
                    <TextField
                        variant="standard"
                        type="text"
                        id="username"
                        name="username"
                        value={data.username}
                        label="Username"
                        autoFocus
                        error={errors.username !== undefined}
                        helperText={errors.username}
                        onChange={handleChange}
                    />
                    <br />
                    <TextField
                        variant="standard"
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        label="Password"
                        error={errors.password !== undefined}
                        helperText={errors.password}
                        onChange={handleChange}
                    />
                    <br />
                    <Button variant="contained" type="submit">
                        Login
                    </Button>
                    <span className={style.register}>
                        No account yet?{' '}
                        <Link to="/register">Register here!</Link>
                    </span>
                </form>
            </CenterContainer>
        </AnimatedDiv>
    );
};

export default Login;
