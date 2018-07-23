import React, {Component} from 'react';
import styled from 'styled-components';
import TaskHeader from './TaskHeader';
import TaskList from './TaskList';

export default class TaskMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks:props,
        }
        console.log('tareas: ',this.state.tasks.tasks);
        
    }
    render(){
        return(
            <Main>
                <TaskHeader titleTask="To Do"/>
                <TaskList tareas={this.state.tasks}/>
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