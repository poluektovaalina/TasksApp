import useTaskStore from "../store/useTaskStore";
import './TaskList.css'
import TaskItem from "./TaskItem";

export default function TaskList(){
    const tasks = useTaskStore((state) => state.tasks);

    return(
        <ul className="task_list">
            {tasks.length === 0 ? (
                <p>Пока нет задачь. Добавь первую ❤</p>
            ) : (tasks.map((task) => <TaskItem key={task.id} task={task} />))}
        </ul>
    )
}