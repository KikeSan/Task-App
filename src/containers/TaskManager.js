import React, {Component} from 'react'
import TaskStatus from '../components/TaskStatus'
import TaskMain from '../components/TaskMain'

export default class TaskManager extends Component{
    constructor(){
        super();
        this.state = {
            tareas:[{
                "taskId":1,
                "taskTitulo":"Tarea demo 1",
                    "taskstatus":0
                },
                {
                    "taskId":2,
                    "taskTitulo":"Tarea demo 2",
                    "taskstatus":1
                },
                {
                    "taskId":3,
                    "taskTitulo":"Tarea demo 3",
                    "taskstatus":0
                },
                {
                    "taskId":4,
                    "taskTitulo":"Tarea demo 4",
                    "taskstatus":2
                },
                {
                    "taskId":5,
                    "taskTitulo":"Tarea demo 5",
                    "taskstatus":0
                }],
            currentTasks:0,
            colors:['#03a9f4','#ffc107','#3dd843'],
            namesStatus: ['To Do','In Progress','Done!'],
        }
        this.setCurrentState = this.setCurrentState.bind(this);
    }
    setCurrentState(idCurrent){
        console.log('setCurrentState',idCurrent);
        this.setState({ currentTasks: idCurrent })
    }
    render(){
        return(
            <div className='row'>
                <TaskStatus current={this.state.currentTasks} colors={this.state.colors} names={this.state.namesStatus} handleClick={this.setCurrentState}/>
                <TaskMain tasks={this.state.tareas} current={this.state.currentTasks} names={this.state.namesStatus}/>
            </div>
        )
    }
}