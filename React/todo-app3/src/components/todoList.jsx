import React, {useState} from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const handleAdd = () => {
        if (newTask.trim() === "") return;

        if (editIndex !== null) {
            const updated = [...tasks];
            updated[editIndex] = newTask;
            setTasks(updated);
            setEditIndex(null);
        } else {
            setTasks([...tasks, newTask]);
        }

        setNewTask("");
    };

    const handleDelete = (index) => {
        setTaskw(tasks.filter((_, i) => i !== index))
    };

    const handleEdit = (index) => {
        setNewTask(tasks[index]);
        setEditIndex(index);
    };

    return (
        <div className="card shadow-sm p-4">
            <div className="input-group mb-3">
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Ajouter une tache..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  />
                  <button onClick={handleAdd} className={`btn ${editIndex !== null ? "btn-warning" : "btn-success"}`}>
                    {editIndex !== null ? "Modifier" : "Ajouter"}
                  </button>  
            </div>
            <ul className="list-group">
                {tasks.map((task, index) => (
                    <li 
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        {task}
                        <div>
                            <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => handleEdit(index)}
                            >
                                ✏️
                            </button>
                            <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(index)}
                            >
                                ❌
                            </button>
                        </div>

                    </li>
                ))}

            </ul>
        </div>
    );
}
export default TodoList;