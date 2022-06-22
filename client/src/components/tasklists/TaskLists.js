import * as React from 'react';
import { Alert } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CardContainer from '../utils/CardContainer';
import Row from './Row';
import Loading from './Loading';
import useTasklistService from '../../services/useTasklistService';
import Pagination from './Pagination';
import Header from './Header';
import AnimatedDiv from '../utils/AnimatedDiv';
import useDocumentTitle from '../../services/useDocumentTitle';

const TaskLists = ({ itemPerPage = 10, loadingTime = 1500 }) => {
    useDocumentTitle('Task-Manager - Tasklists');

    const {
        isOpen,
        currentData,
        loading,
        tasks,
        data,
        page,
        filterOpen,
        id,
        anchorEl,
        control,
        filterData,
        isLoading,
        setLoading,
        handleFilterClick,
        handleClickAway,
        onSubmit,
        onError,
        handleSubmit,
        handleClear,
        handleOpen,
        handleClose,
        handleNewOrEdit,
        handleEdit,
        handleOpenFromRow,
        handleDeleteFromRow,
        handlePageChange
    } = useTasklistService({ itemPerPage });

    setTimeout(() => {
        setLoading(isLoading || false);
    }, loadingTime);

    return (
        <AnimatedDiv>
            <CardContainer>
                <Header
                    filterData={filterData}
                    handleFilterClick={handleFilterClick}
                    filterOpen={filterOpen}
                    id={id}
                    anchorEl={anchorEl}
                    handleClickAway={handleClickAway}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    onError={onError}
                    control={control}
                    data={data}
                    handleClear={handleClear}
                    handleOpen={handleOpen}
                    isOpen={isOpen}
                    handleClose={handleClose}
                    handleNewOrEdit={handleNewOrEdit}
                />

                {currentData?.length <= 0 && !loading && (
                    <Alert severity="warning">
                        There are no tasklists available - create one!
                    </Alert>
                )}
                <Table
                    aria-label="collapsible table"
                    sx={{
                        boxShadow: 'none',
                        margin: '0',
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Title</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Task Number</TableCell>
                            <TableCell align="right">Created</TableCell>
                            <TableCell align="right">Modified</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!loading &&
                            currentData?.map((row, index) => (
                                <Row
                                    key={index}
                                    row={row}
                                    index={index}
                                    tasks={tasks}
                                    handleEdit={handleEdit}
                                    handleOpenFromRow={handleOpenFromRow}
                                    handleDeleteFromRow={handleDeleteFromRow}
                                />
                            ))}
                        {loading && (
                            <>
                                <Loading count={itemPerPage} />
                            </>
                        )}
                    </TableBody>
                </Table>
                <Pagination
                    loading={loading}
                    data={data}
                    filterData={filterData}
                    itemPerPage={itemPerPage}
                    handlePageChange={handlePageChange}
                    page={page}
                />
            </CardContainer>
        </AnimatedDiv>
    );
};

export default TaskLists;
