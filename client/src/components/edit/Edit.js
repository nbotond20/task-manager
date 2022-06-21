import CardContainer from '../utils/CardContainer';
import useEditingService from '../../services/useEditingService';
import Buttons from './Buttons';
import EditTable from './Table';
import Header from './Header';
import AnimatedDiv from '../utils/AnimatedDiv';
import useDocumentTitle from '../utils/useDocumentTitle';
import style from './css/Edit.module.css';

const Edit = () => {
    const {
        editing,
        control,
        tasks,
        cancel,
        setIsClosing,
        onSubmit,
        handleSubmit,
        watch,
        onError,
        handleDelete,
        handlePageChange
    } = useEditingService();

    useDocumentTitle(`Task-Manager - Edit`);

    return (
        <AnimatedDiv>
            <CardContainer>
                <h1 className={style.title}>Edit</h1>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Header control={control} watch={watch} editing={editing} />
                    <EditTable
                        tasks={tasks}
                        control={control}
                        setIsClosing={setIsClosing}
                        onSubmit={onSubmit}
                        handleDelete={handleDelete}
                        handlePageChange={handlePageChange}
                    />
                    <Buttons setIsClosing={setIsClosing} cancel={cancel} />
                </form>
            </CardContainer>
        </AnimatedDiv>
    );
};

export default Edit;
