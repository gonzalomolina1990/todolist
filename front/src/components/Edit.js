import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Todos from './to-dos';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';


function Edit(){
    const[task, setTask] = useState('');
    const[responsible, setResponsible] = useState('');
    const[date, setDate] = useState('');
    const[completed, setCompleted] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();

    let currentState = JSON.parse(localStorage.getItem("Todos"));




    const handleSubmit = (e) => {
        e.preventDefault();

        let newState = [];

        for (const item of currentState) {

            


            if (item.id === localStorage.getItem("id")) {
                newState.push({
                    id: id,
                    task: task,
                    responsible : responsible,
                    date : date,
                    completed : completed
                })
                
            } else {
                newState.push(item);
            }
        }

        console.log("new", newState);

        localStorage.setItem("Todos", JSON.stringify(newState));

        history("/");
    }

    useEffect(() => {
        setTask(localStorage.getItem('task'))
        setResponsible(localStorage.getItem('responsible'))
        setDate(localStorage.getItem('date'))
        setCompleted(localStorage.getItem('completed')==='true');
        setId(localStorage.getItem('id'))


    },[])


    return(
        <Container fluid>

            <Row>
                <Col>
                    <h1>Edit {task}</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                <Row>
                <Col>
                    <Form className="d-grid gap-2" style={{margin:"auto"}}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter Task" value={task} required onChange={ (e) => setTask(e.target.value)}> 
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter Responsible Name" value={responsible} required onChange={ (e) => setResponsible(e.target.value)}> 
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter Date" value={date} required onChange={ (e) => setDate(e.target.value)}> 
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Switch  checked={completed}  onChange={ (e) => { setCompleted(!completed);}}> 
                        </Form.Switch>
                    </Form.Group>
                    
                    <Button onClick={(e)=>{ handleSubmit(e)}} type="submit" >Submit</Button>

                    </Form>
                </Col>
            </Row>
                </Col>
            </Row>

   
        </Container>
    )

}

export default Edit;


