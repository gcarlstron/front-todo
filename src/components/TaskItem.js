import React from 'react';

function TaskItem({task, onEdit, onDelete}){
    return (
        <div className="task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <div className="task-actions">
                <button onClick={() => onEdit(task)}>Editar</button>
                <button onClick={() => onDelete(task.id)}>Excluir</button>
            </div>
        </div>
    )
}

export default TaskItem;