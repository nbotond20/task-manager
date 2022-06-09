import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import RequireAuth from './components/auth/RequireAuth';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/home/Home';
import Tasks from './components/tasks/Tasks';
import TaskLists from './components/tasklists/TaskLists';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import My404Page from './components/my404page/My404Page';
import Profile from './components/profile/Profile';
import Edit from './components/edit/Edit';
import { load, setEditing, setUserId } from './state/edit/editSlice';
import fetchLocalUser from './actions/fetchLocalUser';
import fetchLocalTasklist from './actions/fetchLocalTasklist';
import loginAction from './actions/login';
import CookieConsent from './components/cookie/CookieConsent';
import Toast from './components/utils/Toast';

function App() {
    const dispatch = useDispatch();

    const { token, localUser } = fetchLocalUser();
    const { localTaskList } = fetchLocalTasklist(localUser);

    useEffect(() => {
        if (token && localUser) {
            dispatch(loginAction({ user: localUser, token }));
            dispatch(setUserId({ userId: localUser.id }));
            dispatch(load());
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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="tasks" element={<Tasks />} />
                    <Route
                        path="tasklists"
                        element={
                            <RequireAuth>
                                <TaskLists />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="edit"
                        element={
                            <RequireAuth>
                                <Edit />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="profile"
                        element={
                            <RequireAuth>
                                <Profile />
                            </RequireAuth>
                        }
                    />
                    <Route path="*" element={<My404Page />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
