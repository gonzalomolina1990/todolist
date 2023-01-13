import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Todos from './to-dos';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';

function Add() {
    
    const[task, setTask] = useState('');
    const[responsible, setResponsible] = useState('');
    const[date, setDate] = useState('');
    const[completed, setCompleted] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = task, b = responsible, c = date, d = completed;

        Todos.push({id: uniqueId, task: a, responsible: b, date: c, completed: d} )
    
        history("/");
    }


    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
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
                    <Form.Control type="text" placeholder="Is completed" required onChange={ (e) => setCompleted(e.target.value)}> 
                    </Form.Control>
                </Form.Group>
                
                <Button onClick={(e)=>{ handleSubmit(e)}} type="submit" >Submit</Button>

            </Form>
        </div>
    )
}

export default Add;