import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    CircularProgress,
    Grow,
    Skeleton,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Loading = ({ count }) => {
    const list = Array.from(Array(count).keys());

    return (
        <>
            {list.map((e, index) => (
                <Grow
                    direction="up"
                    in={true}
                    {...(true ? { timeout: 250 * index } : {})}
                    key={index}
                    
                >
                    <Accordion
                        sx={{
                            boxShadow: 'none',
                            margin: '0',
                            border: 'none',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="secondary"/>}
                            sx={{
                                boxShadow: 'none'
                            }}
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                <Skeleton />
                            </Typography>
                            <Typography
                                sx={{
                                    marginLeft: '1em',
                                    width: '15%',
                                    color: 'text.secondary'
                                }}
                            >
                                <Skeleton />
                            </Typography>
                            <Box flexGrow={1} />
                            <Button
                                sx={{ margin: 'auto', zIndex: '1' }}
                                variant="contained"
                            >
                                <CircularProgress size={24} color="inherit" />
                            </Button>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>
                </Grow>
            ))}
        </>
    );
};

export default Loading;