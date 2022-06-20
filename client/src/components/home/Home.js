import CardContainer from '../utils/CardContainer';
import useDocumentTitle from '../utils/useDocumentTitle';
import AnimatedDiv from '../utils/AnimatedDiv';

const Home = () => {
    useDocumentTitle('Task-Manager - Home');

    return (
        <AnimatedDiv>
            <CardContainer>
                <h1>
                    Task-Manager
                </h1>
            </CardContainer>
        </AnimatedDiv>
    );
};

export default Home;
