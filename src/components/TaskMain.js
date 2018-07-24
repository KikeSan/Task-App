import React, {Component} from 'react';
import styled from 'styled-components';
import TaskHeader from './TaskHeader';
import TaskList from './TaskList';

export default class TaskMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks:props.tasks,
            current:props.current,
            names:props.names,
        }
        console.log('tareas: ',this.state.tasks);
        console.log('current: ',this.state.current);
        
    }
    render(){
        return(
            <Main>
                <TaskHeader titleTask={this.state.names[this.state.current]}/>
                <TaskList tareas={this.props.tasks}/>
            </Main>
        )
    }
}

const Main = styled.div`
  overflow: hidden;
  display: inline-block;
  height: 99vh;
  width:79%;
`