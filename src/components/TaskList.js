import React from 'react';
import TaskListItem from './TaskListItem';

const TaskList = ({ tareas }) => {
    return <ul>
    {
        tareas.map((tarea) => <TaskListItem titulo={tarea.taskTitulo} state={tarea.taskstatus} key={tarea.taskId}/>)
    }
    </ul>
}
export default TaskList
