import React from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Todos from './to-dos';


function Home(){
    <div>
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
                    </tr>
                </thead>
                <tbody>
                    {
                        Todos ?
                        Todos.map((item) => {
                            return(
                                <tr key="td">
                                    <td key={"1"}>{item.task}</td>

                                    <td key={"2"}>{item.responsible}</td>

                                    <td key={"3"}>{item.date}</td>

                                    <td key={"4"}>{item.completed}</td>
                                </tr>
                            )
                        })
                        : "No data available"
                    } 
                </tbody>
            
            </Table>
        </div>
    </div>
}

export default Home;