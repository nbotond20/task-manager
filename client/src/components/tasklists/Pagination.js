import PaginationRounded from '../utils/PaginationRounded';
import style from './css/TaskLists.module.css';

const Pagination = ({
    loading,
    data,
    filterData,
    itemPerPage,
    handlePageChange,
    page
}) => {
    return (
        <div className={style.pagination}>
            <PaginationRounded
                count={
                    loading
                        ? 1
                        : filterData
                        ? Math.ceil(
                              Math.max(filterData.length / itemPerPage, 1)
                          )
                        : data
                        ? Math.ceil(Math.max(data.length / itemPerPage, 1))
                        : 1
                }
                onChange={handlePageChange}
                page={page}
            />
        </div>
    );
};

export default Pagination;
