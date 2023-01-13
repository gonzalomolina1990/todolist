import React from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Todos from './to-dos';
import {Link, useNavigate} from 'react-router-dom';


function Home(){

    let history = useNavigate()

    const handleEdit = (task, responsible, date, completed, id) => {
        localStorage.setItem('task', task);
        localStorage.setItem('responsible', responsible);
        localStorage.setItem('date', date);
        localStorage.setItem('completed', completed);
        localStorage.setItem('id', id);


        Todos.push();
    }

    const handleDelete = (id) => {
        var index = Todos.map(function(e){
            return e.id
        }).indexOf(id);

        Todos.splice(index,1);

        history('/');
    }

    return(<div>
        <div style={{margin:"10rem"}}>
            <Table stripped bordererd hover size="sm">
                <thead>
                    <tr>
                        <th key="task">
                            Task
                        </th>
                        <th key="responsible">
                            Responsible
                        </th>
                        <th key="date">
                            Date
                        </th>
                        <th key="completed">
                            Completed
                        </th>
                        <th key="completed">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Todos && Todos.length > 0 ?
                        Todos.map((item) => {
                            return(
                                <tr key="td">
                                    <td key={"1"}>{item.task}</td>

                                    <td key={"2"}>{item.responsible}</td>

                                    <td key={"3"}>{item.date}</td>

                                    <td key={"4"}>{item.completed}</td>
                                    
                                    <td key={"5"}>
                                        <Link to={`/edit`}>
                                            <Button onClick={()=>{handleEdit(item.task, item.responsible, item.date, item.completed, item.id)}}>Edit</Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={()=>{handleDelete(item.id)}} variant="danger">Delete</Button>
                                    </td>


                                </tr>
                            )
                        })
                        : "No data available"
                    } 
                </tbody>
            
            </Table>
            <br>
            </br>
            <Link className='d-grid gap-2' to={`/create`}>
                <Button variant="success" size="lg">Create</Button>
            </Link>
        </div>
    </div>)
}

export default Home;