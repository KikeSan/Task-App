import React, {Components} from 'react';
import TaskListItem from './TaskListItem';

const TaskList = ({ tareas, colors }) => {
    return <ul>
    {
        tareas.map((tarea) => <TaskListItem titulo={tarea.taskTitulo} state={tarea.taskstatus} key={tarea.taskId} id={tarea.taskId} colors={colors}/>)
    }
    </ul>
} 

export default TaskList
