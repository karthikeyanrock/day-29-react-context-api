import { Container } from 'reactstrap';
import homepic from './studTeachquotes.jpg';
import {  Typography } from 'antd';
const { Title, Paragraph,  Link } = Typography;

const Home = ()=>{
    return  <div>
                <img src={homepic}></img>
                <Container style={{Fontsize:'50px' , textAlign: 'left'}}>
                    <Typography>
                        <Title>About This Application</Title>
                            <Paragraph>
                                <ul>
                                    <li>
                                        <p> Used the <b>Ant.design</b> library to create this project.</p>
                                    </li>
                                    <li>
                                        <p> This project do all<b> CRUD Operations</b> by using <b> Context Api </b> from react .</p>
                                    </li>
                                </ul>
                            </Paragraph>
                        <Title>Context Api :</Title>
                            <Paragraph>
                                <ul>
                                    <li>
                                        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to <b>"prop drilling"</b> or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                                    </li>
                                    <li>
                                        <p>Context API is a (kind of) new feature added in <b>version 16.3</b> of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
                                    </li>
                                    <li>
                                        <p ><h4 >React.createContext()</h4> is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                                    </li>
                                    <li>
                                        <Link href='https://reactjs.org/docs/context.html'>Click me to kow more about Context Api</Link>
                                    </li>
                                </ul>
                            </Paragraph>
                    </Typography>
                </Container>
            </div>
}
export default Home ;