import CardContainer from '../utils/CardContainer';
import useEditingService from '../../services/useEditingService';
import Buttons from './Buttons';
import EditTable from './Table';
import Header from './Header';

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
    } = useEditingService();

    return (
        <>
            <CardContainer>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Header control={control} watch={watch} editing={editing} />
                    <EditTable
                        tasks={tasks}
                        control={control}
                        setIsClosing={setIsClosing}
                        onSubmit={onSubmit}
                        handleDelete={handleDelete}
                    />
                    <Buttons setIsClosing={setIsClosing} cancel={cancel} />
                </form>
            </CardContainer>
        </>
    );
};

export default Edit;
