import { create } from "zustand"
import { v4 as uuidv4 } from "uuid"

const useTaskStore = create((set) => ({
    tasks: [],
    hasLoaded: false, // добавили
    // Добавление новой задачи
    addTask: (title) => 
        set((state) => ({
            ...state,
            tasks: [
                ...state.tasks,
                {
                    id: uuidv4(),
                    title,
                    completed: false
                }
            ]
        })),
    // Переключение статуса выполнения задачи по ID 
    toggleTask: (id) => 
        set((state) => ({
            tasks: state.tasks.map((task) => {
                if(task.id == id){
                    return {...task, completed : !task.completed}
                }else{
                    return task
                }
            }
                // task.id == id ? {...task, completed: !task.completed } : task
            )
        })),
    // Удаление задачи по ID
    deleteTask: (id) => 
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id != id)
        })),
    // Загрузка задачи из LocalStorage при иницилизации 
    // Используем `initialTasks` для начальной загрузки, если они есть
    loadTasks: () => {
        const storedTasks = localStorage.getItem('tasks')
        console.log('[Store] loadTasks вызвана');
        if(storedTasks) {
            console.log('[Store] Загружены задачи из localStorage:', storedTasks);
            set({tasks: JSON.parse(storedTasks), hasLoaded: true})
        }else {
            set({ hasLoaded: true })
            console.log('[Store] Нет сохранённых задач');
        }
    } 
}))

export default useTaskStore