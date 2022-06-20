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
            <Toast />
            <CookieConsent />
            <BrowserRouter>
                <NavBar />
                <AnimatedRoutes />
            </BrowserRouter>
        </>
    );
}

export default App;
