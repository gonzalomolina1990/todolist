import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Todos from './to-dos';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Add() {
    
    const[task, setTask] = useState('');
    const[responsible, setResponsible] = useState('');
    const[date, setDate] = useState('');
    const[completed, setCompleted] = useState('');



    let history = useNavigate();

    let currentState = JSON.parse(localStorage.getItem("Todos"));

    const handleSubmit = (e) => {

        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = task, b = responsible, c = date, d = completed;
        currentState.push({id: uniqueId, task: a, responsible: b, date: c, completed: d})


        localStorage.setItem("Todos", JSON.stringify(currentState));
        history("/");
    }


    return(
        <Container>
            <Row>
                <Col>
                    <h1>Create To-do</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form className="d-grid gap-2" style={{margin:"auto"}}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter Task" required onChange={ (e) => setTask(e.target.value)}> 
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter Responsible Name" required onChange={ (e) => setResponsible(e.target.value)}> 
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter Date" required onChange={ (e) => setDate(e.target.value)}> 
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Switch checked={completed ? true : false} onChange={ (e) => setCompleted(e.target.checked)}> 
                        </Form.Switch>
                    </Form.Group>
                    
                    <Button onClick={(e)=>{ handleSubmit(e)}} type="submit" >Submit</Button>

                </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default Add;