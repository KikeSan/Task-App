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
            title:props.titulo,
            colors:props.colors,
        }
        console.log('tareas: ',this.state.tasks);
        console.log('currentMain: ',this.state.current);
        
    }
    render(){
        return(
            <Main>
                <TaskHeader titleTask={this.state.title}/>
                <TaskList tareas={this.state.tasks} colors={this.state.colors}/>
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