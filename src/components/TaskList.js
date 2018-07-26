import React, {Component} from 'react';
import TaskListItem from './TaskListItem';

export default class TaskList extends Component{
    constructor(props){
        super(props);
        this.jumpModal = this.jumpModal.bind(this)
    }
    jumpModal(index){
        console.log('jumpModal',index);
        this.props.onClick(index);
    }
    render(){
        return(
            <ul>
                {
                    this.props.tareas.map((tarea) => <TaskListItem titulo={tarea.taskTitulo} state={tarea.taskstatus} key={tarea.taskId} id={tarea.taskId} colors={this.props.colors} onClick={this.jumpModal}/>)
                }
            </ul>
        )
    }
}