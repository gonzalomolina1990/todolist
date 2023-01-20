import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Todos from './to-dos';
import {Link, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home(){

    const [list, setList] = useState(Todos);

    let history = useNavigate()



    const handleEdit = (item) => {
        localStorage.setItem('task', item.task);
        localStorage.setItem('responsible', item.responsible);
        localStorage.setItem('date', item.date);
        localStorage.setItem('completed', item.completed);
        localStorage.setItem('id', item.id);


    }

    const handleDelete = (id) => {
        let newState = [];

        for (const item of list) {

            console.log(item);

            if (item.id !== id) {
                newState.push(item);
            } 
        }

        console.log("new", newState);

        localStorage.setItem("Todos", JSON.stringify(newState));
        setList(newState);

        history("/");
    }

    useEffect(()=>{

        if (localStorage.getItem("Todos")) {
            setList(JSON.parse(localStorage.getItem("Todos")));
        } else {
            localStorage.setItem("Todos", JSON.stringify(Todos))
        }
    }, [])

    return(<div>
        <Container fluid style={{margin:"auto"}}>
            
            <Row>
                <h1>To-do list!</h1>
            </Row>
            <Row>
                <Col>
                        
                    
                        <Row>
                                <Col>
                                    <Row className='mainrow'>
                                        <Col>
                                            Task
                                        </Col>
                                        <Col >
                                            Responsible
                                        </Col>
                                        <Col >
                                            Date
                                        </Col>
                                        <Col >
                                            Completed
                                        </Col>
                                        <Col >
                                            Actions
                                        </Col>
                                    </Row>
                                        {
                                            list && list.length > 0 ?
                                            list.map((item) => {
                                                return(
                                                    <Row >
                                                        <Col >{item.task}</Col>

                                                        <Col >{item.responsible}</Col>

                                                        <Col >{item.date}</Col>

                                                        <Col >{item.completed ? "True" : "False"}</Col>
                                                        
                                                        <Col>
                                                            <Link to={`/edit`}>
                                                                <Button onClick={()=>{handleEdit(item)}}>Edit</Button>
                                                            </Link>
                                                            &nbsp;
                                                            <Button onClick={()=>{handleDelete(item.id)}} variant="danger">Delete</Button>
                                                        </Col>


                                                    </Row>
                                                )
                                            })
                                            : "No data available"
                                        } 
                                </Col>
                        
                        </Row>

                        <Row>
                            <Col>
                                <Link className='d-grid gap-2' to={`/create`}>
                                <Button variant="success" size="lg">Create To-do</Button>
                                </Link>
                            </Col>
                        </Row>
                    


                </Col>
            </Row>
            
        </Container>
    </div>)
}

export default Home;