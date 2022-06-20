import CardContainer from '../utils/CardContainer';
import useEditingService from '../../services/useEditingService';
import Buttons from './Buttons';
import EditTable from './Table';
import Header from './Header';
import AnimatedDiv from '../utils/AnimatedDiv';
import useDocumentTitle from '../utils/useDocumentTitle';

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
