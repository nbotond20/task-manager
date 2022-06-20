import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Alert, Box, Button, Grow } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import useTasksService from '../../services/useTasksService';
import CardContainer from '../utils/CardContainer';
import PaginationRounded from '../utils/PaginationRounded';
import useDocumentTitle from '../utils/useDocumentTitle';
import Loading from './Loading';
import style from './css/Tasks.module.css';
import AnimatedDiv from '../utils/AnimatedDiv';
import SearchBar from './SreachBar';

export default function Tasks({ itemPerPage = 10, loadingTime = 1500 }) {
    useDocumentTitle('Task-Manager - Tasks');

    const {
        user,
        editing,
        page,
        loading,
        isLoading,
        expanded,
        search,
        filterdData,
        data,
        setSearch,
        setLoading,
        handleSelect,
        handleExpand,
        handlePageChange,
        handleDelete
    } = useTasksService({ itemPerPage });

    setTimeout(() => {
        setLoading(isLoading || false);
    }, loadingTime);

    return (
        <AnimatedDiv>
            <CardContainer>
                <h1 className={style.title}>
                    <SearchBar search={search} setSearch={setSearch} />
                    Tasks
                </h1>
                {filterdData?.length <= 0 && !loading && (
                    <Alert severity="warning">
                        There are no tasks available - create one!
                    </Alert>
                )}
                <Accordion
                    sx={{
                        boxShadow: 'none',
                        margin: '0',
                        fontWeight: 'bold'
                    }}
                >
                    <AccordionSummary
                        sx={{
                            boxShadow: 'none'
                        }}
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Title
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Description
                        </Typography>
                    </AccordionSummary>
                </Accordion>
                {!loading &&
                    filterdData?.map((task, index) => (
                        <Grow
                            direction="up"
                            in={true}
                            {...(true ? { timeout: 250 * (index + 1) } : {})}
                            key={index}
                        >
                            <Accordion
                                expanded={expanded === `panel${index}}`}
                                onChange={handleExpand(`panel${index}}`)}
                                sx={{
                                    boxShadow: 'none',
                                    broder: '0px',
                                    margin: '0 !important'
                                }}
                                className={
                                    expanded === `panel${index}}`
                                        ? style.showBorder
                                        : style.hideBorder
                                }
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index}}bh-content`}
                                    id={`panel${index}}bh-header`}
                                    sx={{
                                        boxShadow: 'none',
                                        border: '0px',
                                        margin: '0'
                                    }}
                                >
                                    <Typography
                                        sx={{ width: '33%', flexShrink: 0 }}
                                    >
                                        {task.title}
                                    </Typography>
                                    <Typography
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        <span
                                            className={
                                                expanded === `panel${index}}`
                                                    ? style.hideDesc
                                                    : style.showDesc
                                            }
                                        >
                                            {task.description.slice(0, 25)}
                                            {task.description.length > 25
                                                ? '...'
                                                : ''}
                                        </span>
                                    </Typography>
                                    <Box flexGrow={1} />
                                    {user && (
                                        <>
                                            <Button
                                                sx={{
                                                    margin: 'auto',
                                                    zIndex: '1'
                                                }}
                                                variant="contained"
                                                onClick={(e) => {
                                                    handleSelect(e, task);
                                                }}
                                                disabled={
                                                    editing?.tasks.find(
                                                        (t) => t.id === task.id
                                                    ) === undefined
                                                        ? false
                                                        : true
                                                }
                                            >
                                                {editing?.tasks.find(
                                                    (t) => t.id === task.id
                                                )
                                                    ? 'Selected'
                                                    : 'Select'}
                                            </Button>
                                            <Button
                                                onClick={(e) =>
                                                    handleDelete(e, task.id)
                                                }
                                            >
                                                <DeleteIcon color="error" />
                                            </Button>
                                        </>
                                    )}
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        <span
                                            className={
                                                !(expanded === `panel${index}}`)
                                                    ? style.hiddenDesc
                                                    : style.showDesc
                                            }
                                        >
                                            {task.description}
                                        </span>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grow>
                    ))}
                {loading && (
                    <>
                        <Loading count={itemPerPage} />
                    </>
                )}
                <div className={style.pagination}>
                    <PaginationRounded
                        count={
                            data
                                ? Math.ceil(
                                      Math.max(
                                          data.total / itemPerPage,
                                          1
                                      )
                                  )
                                : 1
                        }
                        onChange={handlePageChange}
                        page={page}
                    />
                </div>
            </CardContainer>
        </AnimatedDiv>
    );
}
