import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
    
  };
  return (
    <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
            <h1 className="text-2xl font-bold text-white mb-3">Crear tarea</h1>
      <input
        placeholder="Ingrese su tarea"
        onChange={(e) => setTitle(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-2"
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Descripcion de tarea"
        onChange={(e) => setDescription(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-2"
        value={description}
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white">
        Ingresar
        </button>
    </form>
  </div>
  );
}

export default TaskForm;
