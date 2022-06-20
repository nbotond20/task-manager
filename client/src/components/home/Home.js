import CardContainer from '../utils/CardContainer';
import useDocumentTitle from '../utils/useDocumentTitle';
import AnimatedDiv from '../utils/AnimatedDiv';
import style from './css/Home.module.css';

const Home = () => {
    useDocumentTitle('Task-Manager - Home');

    return (
        <AnimatedDiv>
            <CardContainer>
                
            </CardContainer>
        </AnimatedDiv>
    );
};

export default Home;
