import Button from "./Button";
import { useState, useEffect } from "react";
import { MdOutlineTaskAlt } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    console.log("Task list updated:", tasks);
  }, [tasks]);

  const handleTaskClick = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), text: taskInput, completed: false },
      ]);
      setTaskInput("");
    }
  };

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // "all"
  });

  return (
    <div>
      <div className="text-center">
        <div className="flex justify-center items-center">
          <MdOutlineTaskAlt className="text-3xl mr-2" />
          <h1 className="font-bold text-4xl tracking-widest leading-10">
            Task Manager
          </h1>
        </div>
        <p className="text-md italic">Manage your tasks efficiently.</p>
      </div>

      <form
        className="border border-gray-200 shadow-md mx-auto my-5 w-[500px] md:w-1/2 p-8"
        onSubmit={handleTaskClick}
      >
        <label htmlFor="task">
          <input
            type="text"
            id="task"
            value={taskInput}
            onChange={handleInputChange}
            placeholder="Add a new task..."
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
          />
        </label>

        <Button variant="primary" size="sm" onClick={handleTaskClick}>
          Add Task
        </Button>
      </form>

      <div className="flex justify-center items-center gap-20">
        <Button variant="secondary" size="sm" onClick={() => setFilter("all")}>
          All tasks
        </Button>
        <Button variant="warning" size="sm" onClick={() => setFilter("active")}>
          Active
        </Button>
        <Button
          variant="success"
          size="sm"
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>

      <div className="border border-gray-200 shadow-md mx-auto my-5 w-[500px] md:w-1/2 p-8">
        <h2 className="font-bold text-2xl text-center mb-4">
          <FaTasks className="inline mr-2 text-xl" />
          Task Overview
        </h2>
        <ul>
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`p-2 border-b border-gray-300 flex justify-between items-center ${
                task.completed ? "line-through text-green-500" : ""
              }`}
            >
              <span onClick={() => toggleTaskCompletion(task.id)}>
                {task.text}
              </span>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;
