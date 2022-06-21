import CardContainer from '../utils/CardContainer';
import useDocumentTitle from '../utils/useDocumentTitle';
import style from './css/Home.module.css';
import { Button, IconButton, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from '../../state/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { setEditing } from '../../state/edit/editSlice';

const Home = () => {
    const user = useSelector(selectLoggedInUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useDocumentTitle('Task-Manager - Home');

    const handleCreateNewTasklist = () => {
        dispatch(
            setEditing({
                taskList: {
                    id: null,
                    title: null,
                    description: null,
                    status: 'draft',
                    userId: user.id,
                    tasks: []
                }
            })
        );
        navigate('/edit');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    ease: 'easeInOut',
                    delay: 0.3
                }
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.1
                }
            }}
        >
            <CardContainer
                style={{
                    height: 'max(500px, 70%)',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className={style.headerDiv}>
                    <Typography
                        variant="h1"
                        style={{
                            fontWeight: 'bold'
                        }}
                    >
                        Manage your tasks.
                    </Typography>
                    <Typography variant="h6" color="secondary">
                        Easy to use. Easy to manage.
                    </Typography>
                    {user ? (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate('/tasks')}
                        >
                            Get Started
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate('/register')}
                        >
                            Sign up
                        </Button>
                    )}
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{
                            y: 0,
                            transition: {
                                ease: 'easeInOut',
                                delay: 0.3
                            }
                        }}
                        exit={{
                            y: 100,
                            transition: {
                                duration: 0.2
                            }
                        }}
                        className={style.cardContainer}
                    >
                        {user && (
                            <>
                                <Tooltip title="Create new tasklist.">
                                    <IconButton
                                        onClick={() =>
                                            handleCreateNewTasklist()
                                        }
                                    >
                                        <div className={style.card}>
                                            <AddIcon sx={{ fontSize: 80 }} />
                                        </div>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Go to my tasklists.">
                                    <IconButton
                                        onClick={() => navigate('/tasklists')}
                                    >
                                        <div className={style.card}>
                                            <AssignmentIcon
                                                sx={{ fontSize: 45 }}
                                            />
                                        </div>
                                    </IconButton>
                                </Tooltip>
                            </>
                        )}
                        <Tooltip title="Check out our github page.">
                            <IconButton>
                                <div className={style.card}>
                                    <a
                                        href="https://github.com/nbotond20/task-manager"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <GitHubIcon sx={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </IconButton>
                        </Tooltip>
                    </motion.div>
                </div>
            </CardContainer>
        </motion.div>
    );
};

export default Home;
