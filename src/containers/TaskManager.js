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
                    "taskstatus":0
                },
                {
                    "taskId":3,
                    "taskTitulo":"Tarea demo 3",
                    "taskstatus":0
                },
                {
                    "taskId":4,
                    "taskTitulo":"Tarea demo 4",
                    "taskstatus":0
                },
                {
                    "taskId":5,
                    "taskTitulo":"Tarea demo 5",
                    "taskstatus":0
                }],
        }
    }

    render(){
        return(
            <div className='row'>
                <TaskStatus/>
                <TaskMain tasks={this.state.tareas}/>
            </div>
        )
    }
}