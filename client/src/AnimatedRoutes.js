import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RequireAuth from './components/auth/RequireAuth';
import Home from './components/home/Home';
import My404Page from './components/my404page/My404Page';
import Profile from './components/profile/Profile';
import TaskLists from './components/tasklists/TaskLists';
import Tasks from './components/tasks/Tasks';
import Edit from './components/edit/Edit';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
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
                    path="/edit"
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
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
