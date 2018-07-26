import React, {Component} from 'react';
import styled from 'styled-components';
import TaskHeader from './TaskHeader';
import TaskList from './TaskList';

export default class TaskMain extends Component{
    constructor(props){
        super(props);
        /* this.state = {
            tasks:props.tasks,
            current:props.current,
            title:props.titulo,
            colors:props.colors,
        } */
        this.paseModal = this.paseModal.bind(this)
        console.log('tareas: ',props.tasks);
        console.log('currentMain: ',props.current);
        
    }
    paseModal(id){
        this.props.onClick(id);
        console.log('paseModal',id)
    }
    render(){
        return(
            <Main>
                <TaskHeader titleTask={this.props.titulo}/>
                <TaskList tareas={this.props.tasks} colors={this.props.colors} onClick={this.paseModal}/>
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