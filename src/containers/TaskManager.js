import React, {Component} from 'react'
import TaskStatus from '../components/TaskStatus'
import TaskMain from '../components/TaskMain'
import TaskDetail from '../components/TaskDetail'
import { debounce } from 'lodash'

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
                },
                {
                    "taskId":6,
                    "taskTitulo":"Tarea demo 6",
                    "taskstatus":1
                }],
            currentTasks:0,
            colors:['#03a9f4','#ffc107','#3dd843'],
            namesStatus: ['To Do','In Progress','Done!'],
            filterTasks:[],
            idForModal:0,
            viewModal:'off'
        }
        this.setCurrentState = this.setCurrentState.bind(this);
        this.openModalOf = this.openModalOf.bind(this);
    }
    setCurrentState(idCurrent){
        var filtrados = [];
        this.state.tareas.map((tarea,index) => {
            console.log('map tareas',tarea.taskstatus)
            if(tarea.taskstatus===idCurrent){filtrados.push(tarea)} 
        })
        setTimeout(()=>{
            this.setState({ 
                currentTasks: idCurrent,
                filterTasks: filtrados
            });
            console.log('filterTasks',this.state.filterTasks);
        },100)
        
    }
    openModalOf(idmod){
        this.setState({
            idForModal:idmod,
            viewModal:'on'
        })
        console.log('openModalOf',idmod);
    }
    render(){
        {console.log('render()',this.state.filterTasks)}
        const tit = this.state.namesStatus[this.state.currentTasks]
        return(
            <div className='row'>
                <TaskStatus current={this.state.currentTasks} colors={this.state.colors} names={this.state.namesStatus} handleClick={this.setCurrentState}/>
                <TaskMain colors={this.state.colors} tasks={this.state.filterTasks} current={this.state.currentTasks} titulo={this.state.filterTasks.length>0?tit:'Select a state of task'} onClick={this.openModalOf}/>
                <TaskDetail detalle={this.state.tareas[this.state.idForModal]} visible={this.state.viewModal}/>
                
            </div>
        )
    }
}