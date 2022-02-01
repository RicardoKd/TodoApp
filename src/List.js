import { useState } from "react";
import Task from "./Task";
import "./styles/List.css";

const List = ({ name, taskList }) => {
  const [todoTitle, setTodoTitle] = useState("New Todo");
  const [tasks, setTasks] = useState(taskList);
  const [newTaskText, setNewTaskText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskText) return;
    setTasks([{ text: newTaskText, done: false }, ...tasks]);
    setNewTaskText("");
    document
      .querySelectorAll(".footer_task-name")
      .forEach((el) => (el.value = ""));
  };

  return (
    <div className="list d-flex">
      <div className="w-100 bg-accent-color">
        <input
          type="text"
          className="header_title w-100 bgc-transp main-color"
          placeholder="Name your todo list"
          value={name === "" ? todoTitle : name}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      </div>
      <div className="list_main flex-1 w-100">
        {tasks.map((task) => {
          return (
            <Task
              text={task.text}
              done={task.done}
              tasks={tasks}
              setTaskList={setTasks}
            />
          );
        })}
      </div>
      <div className="d-flex w-100 bg-accent-color">
        <input
          type="text"
          name="taskName"
          className="footer_task-name flex-1 bgc-transp main-color"
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button
          type="button"
          className="addTaskBtn bgc-transp main-color"
          onClick={addTask}
        >
          Add task
        </button>
      </div>
    </div>
  );
};

export default List;
