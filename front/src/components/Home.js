import React from 'react';
import {Button, Table} from 'react-bootstrap';
import './bootstrap.min.css';
import Todos from './to-dos'


function Home(){
    <div>
        <div style={{margin:"10rem"}}>
            <Table stripped bordererd hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Task
                        </th>
                        <th>
                            Responsible
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Completed
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Todos && Todos.length > 0 ?
                        Todos.map((item) => {
                            return(
                                <tr>
                                    <td key="item1">item.task</td>

                                    <td key="item2">item.responsible</td>

                                    <td key="item3">item.date</td>

                                    <td key="item4">item.completed</td>
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