import useTaskStore from "../store/useTaskStore";
import './TaskItem.css'

export default function TaskItem({task}){
    const { toggleTask, deleteTask } = useTaskStore();

    return(
        <li className={`task_item ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTask(task.id)}   className="task_title"> 
            {task.title} 
            </span> 
            <button onClick={() => deleteTask(task.id)} className="delete_button"> 
            Удалить 
            </button> 
        </li>
    );
}