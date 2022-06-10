import { Button } from '@mui/material';
import Confirmation from './Confirmation';
import Filter from './Filter';
import style from './css/TaskLists.module.css';

const Header = ({
    filterData,
    handleFilterClick,
    filterOpen,
    id,
    anchorEl,
    handleClickAway,
    handleSubmit,
    onSubmit,
    onError,
    control,
    data,
    handleClear,
    handleOpen,
    isOpen,
    handleClose,
    handleNewOrEdit
}) => {
    return (
        <h1 className={style.title}>
            <Filter
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
            />
            Tasklists
            <Button
                variant="contained"
                color="primary"
                sx={{
                    position: 'absolute',
                    right: '0'
                }}
                onClick={() => handleOpen()}
            >
                New Tasklist
            </Button>
            <Confirmation
                isOpen={isOpen}
                handleClose={handleClose}
                handleNewOrEdit={handleNewOrEdit}
            />
        </h1>
    );
};

export default Header;
