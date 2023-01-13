import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Todos from './to-dos';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';

function Edit(){
    const[task, setTask] = useState('');
    const[responsible, setResponsible] = useState('');
    const[date, setDate] = useState('');
    const[completed, setCompleted] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();

    var index = Todos.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();


        let a = Todos[index];
        
        a.task = task;
        a.responsible = responsible;
        a.date = date;
        a.completed = completed;

        history("/");
    }

    useEffect(() => {
        setTask(localStorage.getItem('task'))
        setResponsible(localStorage.getItem('responsible'))
        setDate(localStorage.getItem('date'))
        setCompleted(localStorage.getItem('completed'))
        setId(localStorage.getItem('id'))


    },[])


    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
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
                    <Form.Control type="text" placeholder="Is completed" value={completed} required onChange={ (e) => setCompleted(e.target.value)}> 
                    </Form.Control>
                </Form.Group>
                
                <Button onClick={(e)=>{ handleSubmit(e)}} type="submit" >Submit</Button>

            </Form>
        </div>
    )

}

export default Edit;