import React, {useEffect} from 'react';
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Todos from './to-dos';
import {Link, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home(){

    let history = useNavigate()

    const handleEdit = (item) => {
        localStorage.setItem('task', item.task);
        localStorage.setItem('responsible', item.responsible);
        localStorage.setItem('date', item.date);
        localStorage.setItem('completed', item.completed);
        localStorage.setItem('id', item.id);

        //localStorage.setItem("Todos", JSON.stringify(Todos))

    }

    const handleDelete = (id) => {
        var index = Todos.map(function(e){
            return e.id
        }).indexOf(id);

        Todos.splice(index,1);

        history('/');
    }



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
                                        <Col key="task">
                                            Task
                                        </Col>
                                        <Col key="responsible">
                                            Responsible
                                        </Col>
                                        <Col key="date">
                                            Date
                                        </Col>
                                        <Col key="completed">
                                            Completed
                                        </Col>
                                        <Col key="completed">
                                            Actions
                                        </Col>
                                    </Row>
                                        {
                                            Todos && Todos.length > 0 ?
                                            Todos.map((item) => {
                                                return(
                                                    <Row key="td">
                                                        <Col key={"1"}>{item.task}</Col>

                                                        <Col key={"2"}>{item.responsible}</Col>

                                                        <Col key={"3"}>{item.date}</Col>

                                                        <Col key={"4"}>{item.completed ? "True" : "False"}</Col>
                                                        
                                                        <Col key={"5"}>
                                                            <Link to={`/edit`}>
                                                                <Button onClick={()=>{console.log(item); handleEdit(item)}}>Edit</Button>
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