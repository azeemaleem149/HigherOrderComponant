import React, { Component } from 'react';
const History=(Person, value,name)=>{
    class Embed extends Component {
        state = { 
            Name:name,
            profession:'React Developer',
            experience: '1 year experience',
            company: 'Datum Square IT Services',
            empID: 10
         }
         handledept=()=>{
             return this.setState({empID:this.state.empID+value});
         }
        render() { 
            return ( 
                <Person 
                        name={this.state.Name}
                        profession={this.state.profession} 
                        experience={this.state.experience}
                        company={this.state.company}
                        empID={this.state.empID}
                        handleID={this.handledept} />
             );
        }
    }
     
    return Embed
}
export default History;
