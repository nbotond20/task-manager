import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Alert, Box, Button, Grow } from '@mui/material';
import PaginationRounded from '../utils/PaginationRounded';
import useDocumentTitle from '../utils/useDocumentTitle';
import CardContainer from '../utils/CardContainer';
import Loading from './Loading';
import useTasksService from '../../services/useTasksService';

export default function Tasks({ itemPerPage = 10, loadingTime = 1500 }) {
    useDocumentTitle('Task-Manager - Tasks');

    const {
        user,
        editing,
        data,
        page,
        loading,
        isLoading,
        expanded,
        setLoading,
        handleSelect,
        handleExpand,
        handlePageChange
    } = useTasksService({ itemPerPage });

    setTimeout(() => {
        setLoading(isLoading || false);
    }, loadingTime);

    return (
        <CardContainer>
            <h1 style={{ textAlign: 'center', margin: '0.5 0' }}>Tasks</h1>
            {data?.tasks?.length <= 0 && !loading && (
                <Alert severity="warning">
                    There are no tasks available - create one!
                </Alert>
            )}
            <Accordion
                sx={{
                    boxShadow: 'none',
                    margin: '0',
                    fontWeight: 'bold',
                }}
            >
                <AccordionSummary
                    sx={{
                        boxShadow: 'none',
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
                data?.tasks?.map((task, index) => (
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
                                margin: '0',
                                border: !(expanded === `panel${index}}`)
                                    ? 'none'
                                    : '1px solid #e0e0e0',
                                backgroundColor: !(
                                    expanded === `panel${index}}`
                                )
                                    ? '#fff'
                                    : '#fafafa'
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index}}bh-content`}
                                id={`panel${index}}bh-header`}
                                sx={{
                                    boxShadow: 'none'
                                }}
                            >
                                <Typography
                                    sx={{ width: '33%', flexShrink: 0 }}
                                >
                                    {task.title}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    {!(expanded === `panel${index}}`)
                                        ? `${task.description.slice(0, 25)}${
                                              task.description.length > 25
                                                  ? '...'
                                                  : ''
                                          }`
                                        : ''}
                                </Typography>
                                <Box flexGrow={1} />
                                {user && (
                                    <Button
                                        sx={{ margin: 'auto', zIndex: '1' }}
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
                                )}
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    {task.description}
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
            <div
                style={{
                    display: 'flex',
                    margin: 'auto',
                    justifyContent: 'center',
                    marginTop: '1em'
                }}
            >
                <PaginationRounded
                    count={
                        data
                            ? Math.ceil(Math.max(data.total / itemPerPage, 1))
                            : 1
                    }
                    onChange={handlePageChange}
                    page={page}
                />
            </div>
        </CardContainer>
    );
}
