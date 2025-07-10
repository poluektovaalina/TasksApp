import { useState, useEffect } from 'react';
import useTaskStore from '../store/useTaskStore';
import './TaskInput.css';

export default function TaskInput() {
    const [taskTitle, setTaskTitle] = useState('');
    const addTask = useTaskStore((state) => state.addTask)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle.trim()){
            addTask(taskTitle);
            setTaskTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task_input_form">
            <input 
                type="text" 
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Добавить новую задачу :)"
            />
            <button type="submit">Добавить</button>
        </form>
    )
}
