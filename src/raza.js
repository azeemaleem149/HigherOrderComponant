import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import hoc from './hoc';

class Raza extends Component {
    render() { 
        return ( 
            <div>
                <Container>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Profession</th>
                                <th>Experience</th>
                                <th>Company</th>
                                <th>EmployeeID</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{this.props.name} </td>
                                <td>{this.props.profession} </td>
                                <td>{this.props.experience} </td>
                                <td>{this.props.company}</td>
                                <td onMouseOver={this.props.handleID}>{this.props.empID}</td>

                                </tr>
                            </tbody>
                    </Table>
          
             </Container>
         </div>
         );
    }
}
 
export default hoc(Raza,3,'Ali Raza ');