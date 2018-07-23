import React from 'react';
import TaskListItem from './TaskListItem';

const TaskList = ({ tareas }) => {
    return <div>
    {
        tareas.map(tarea => <TaskListItem titulo={tarea.taskTitulo} state={tarea.taskstatus} />)
    }
    </div>
}
export default TaskList
