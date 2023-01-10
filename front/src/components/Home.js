import React from 'react';
import {Button, Table} from 'react-bootstrap';
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
                                    <td>{item.task}</td>

                                    <td>{item.responsible}</td>

                                    <td>{item.date}</td>

                                    <td>{item.completed}</td>
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