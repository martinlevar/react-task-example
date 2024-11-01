import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Agregar Tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  );
}

export default TaskForm;
