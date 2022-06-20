import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setEditing, setUserId } from './state/edit/editSlice';
import fetchLocalUser from './actions/fetchLocalUser';
import fetchLocalTasklist from './actions/fetchLocalTasklist';
import loginAction from './actions/login';
import CookieConsent from './components/cookie/CookieConsent';
import Toast from './components/utils/Toast';
import loadTasklist from './actions/loadTasklist';
import AnimatedRoutes from './AnimatedRoutes';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#44A574',
        },
        secondary: {
            main: 'rgb(57,140,95)',
        },
        background: {
            default: '#141C23',
            paper: '#232A2E',
        },
        text: {
            primary: 'rgba(255,255,255,0.84)',
            secondary: 'rgba(255,255,255,0.54)',
            disabled: 'rgba(255,255,255,0.38)',
            hint: 'rgba(255,255,255,0.38)',
        },
        divider: '#ffffff',
    },
});

function App() {
    const dispatch = useDispatch();

    const { token, localUser } = fetchLocalUser();
    const { localTaskList } = fetchLocalTasklist(localUser);

    useEffect(() => {
        if (token && localUser) {
            dispatch(loginAction({ user: localUser, token }));
            dispatch(setUserId({ userId: localUser.id }));
            dispatch(loadTasklist(localUser.id));
            if (localTaskList) {
                dispatch(setEditing({ taskList: localTaskList }));
            }
        }
    }, [dispatch, token, localUser, localTaskList]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Toast />
                <CookieConsent />
                <BrowserRouter>
                    <NavBar />
                    <AnimatedRoutes />
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
