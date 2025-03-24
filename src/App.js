import './App.css';
import {useEffect, useState} from "react";
import Notification from './components/Notification';
import {createTask, deleteTask, getAllTasks, updateTask} from "./services/taskService";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

function App() {

  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });

  useEffect(() => {
    fetchTasks().then(tasks => setTasks(tasks));
  }, []);

  const fetchTasks = async () => {
    try{
     const tasksData = await getAllTasks();
     return tasksData || [];
    }catch(error){
      setTasks([]);
      showNotification(`Falha ao buscar as tarefas: ${error.message}`, 'error');
    }
  }

  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  const closeNotification = () => {
    setNotification({ message: '', type: '' });
  };

  const handleCreateTask = () => {
  setCurrentTask(null);
  setIsFormVisible(true);
  };

  const handleFormSubmit = async (formData) => {
    try{
      if(currentTask){
        // Update task
        await updateTask(currentTask.id, {...formData, id: currentTask.id});
        showNotification('Tarefa atualizada com sucesso', 'success');
      }else{
        // Create task
        await createTask(formData);
        showNotification('Tarefa criada com sucesso', 'success');
      }
      setIsFormVisible(false);
      await fetchTasks();
    }catch(error){
      showNotification(`Falha ao salvar a tarefa: ${error.message}`, 'error');
    }
  };

  const handleEditTask = (task) => {

    setCurrentTask(task);
    setIsFormVisible(true);
  }

  const handleDeleteTask = async (id) => {
    try{
      await deleteTask(id);
      showNotification('Tarefa deletada com sucesso', 'success');
      await fetchTasks();
    }catch(error){
      showNotification(`Falha ao deletar a tarefa: ${error.message}`, 'error');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
      </header>
      <main className={"App-content"}>
        <Notification
            message={notification.message}
            type={notification.type}
            onClose={closeNotification}
        />
        <div className={'task-controls'}>
          <button className={'create-btn'} onClick={handleCreateTask}>
            Create New Task
          </button>
          {isFormVisible ? (
              <div>
                <h2>{currentTask ? 'Edit Task' : 'Create New Task'}</h2>
                <TaskForm
                  task = {currentTask}
                    onSubmit = {handleFormSubmit}
                    onCancel = {() => setIsFormVisible(false)}
                />
              </div>
          ): (
              <div className={'task-container'}>
                <h2>Your Tasks</h2>
                {
                  tasks?.length === 0 ? (
                      <p>Nenhuma task...</p>
                  ) : (
                      <div className="tasks-list">
                        {tasks.map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onEdit={handleEditTask}
                                onDelete={handleDeleteTask}
                            />
                        ))}
                      </div>
                  )
                }
              </div>
          )};
        </div>
      </main>
    </div>
  );
}

export default App;
