import { useState, useEffect } from 'react';
import useTaskStore from './store/useTaskStore';
import './App.css';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';


export default function App(){
  const tasks = useTaskStore((state) => state.tasks);
  const hasLoaded = useTaskStore((state) => state.hasLoaded);
  const loadTasks = useTaskStore((state) => state.loadTasks);
  useEffect(() => {
    console.log('[App] useEffect запущен — вызываем loadTasks()');
    loadTasks();
  }, [loadTasks]);

  useEffect(() => {
    if(hasLoaded) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('[App] Текущий список задач:', tasks);
    }
  }, [tasks, hasLoaded]);

  return (
    <div className="App">
      <header className="App_header">
        <h1>Мои задачи</h1>
        <TaskInput/>
        <TaskList/>
      </header>
    </div>
  )
  
}