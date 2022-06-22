import { Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../state/auth/authApiSlice';
import CenterContainer from '../utils/CenterContainer';
import style from './css/Register.module.css';
import AnimatedDiv from '../utils/AnimatedDiv';
import useDocumentTitle from '../../services/useDocumentTitle';

const Register = () => {
    useDocumentTitle('Task-Manager - Register');
    const [data, setData] = useState({
        username: '',
        password: '',
        fullname: ''
    });
    const [errors, setErrors] = useState({});
    const [authRegister] = useRegisterMutation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password, fullname } = data;
        const newErrors = {};

        if (username === '') {
            newErrors.username = 'Username is required';
        }
        if (password === '') {
            newErrors.password = 'Password is required';
        }
        if (fullname === '') {
            newErrors.fullname = 'Fullname is required';
        }

        setErrors(newErrors);

        if (Object.values(newErrors).length > 0) {
            return;
        }

        try {
            await authRegister({
                strategy: 'local',
                email: username,
                password: password,
                fullname: fullname
            }).unwrap();
            navigate('/login', { replace: true });
            toastSuccess('Successful registration!', 1000);
        } catch (err) {
            newErrors.username = 'Register error';
            setErrors({ ...newErrors });
        }
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/', { replace: true });
        }
    }, [navigate]);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return (
        <AnimatedDiv>
            <CenterContainer>
                <form onSubmit={handleSubmit} className={style.form}>
                    <h1 className={style.title}>Register</h1>
                    <TextField
                        variant="outlined"
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={data.fullname}
                        label="Full Name"
                        autoFocus
                        error={errors.fullname !== undefined}
                        helperText={errors.fullname}
                        onChange={handleChange}
                    />
                    <br />
                    <TextField
                        variant="outlined"
                        type="username"
                        id="username"
                        name="username"
                        value={data.username}
                        label="Email"
                        error={errors.username !== undefined}
                        helperText={errors.username}
                        onChange={handleChange}
                    />
                    <br />
                    <TextField
                        variant="outlined"
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        label="Password"
                        error={errors.password !== undefined}
                        helperText={errors.password}
                        onChange={handleChange}
                        color="secondary"
                    />
                    <br />
                    <Button variant="contained" type="submit">
                        Register
                    </Button>
                    <span className={style.login}>
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            style={{
                                color: '#fff'
                            }}
                        >
                            Login here!
                        </Link>
                    </span>
                </form>
            </CenterContainer>
        </AnimatedDiv>
    );
};

export default Register;
