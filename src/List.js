import { useState, useEffect } from "react";
import Task from "./Task";
import "./styles/List.css";
import trashImg from "./img/trash.svg";

const List = ({ todoLists, setTodoLists, storageInd }) => {
  const list = todoLists[storageInd];
  const [todoTitle, setTodoTitle] = useState(
    list.name === "" ? "New TodoX" : list.name
  );
  const [tasks, setTasks] = useState(list.taskList);
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

  const rmList = () => {
    console.log("storageInd=" + storageInd);
    console.log("getItem(storageInd)=" + localStorage.getItem(storageInd));
    localStorage.removeItem(storageInd);
    let filteredTodoLists = [];
    let a = localStorage.length;
    for (let i = 0; i < a; i++) {
      let item = JSON.parse(localStorage.getItem(i));
      console.log(item);
      if (item !== null && i !== storageInd) {
        filteredTodoLists.push(item);
        a++;
      }
    }
    localStorage.clear();

    filteredTodoLists.forEach((list, ind) => {
      localStorage.setItem(ind, JSON.stringify(list));
    });

    console.log(filteredTodoLists);
    setTodoLists(filteredTodoLists);
  };

  useEffect(() => {
    localStorage.setItem(
      storageInd,
      JSON.stringify({
        name: todoTitle,
        taskList: tasks,
      })
    );
  }, [storageInd, tasks, todoTitle]);

  return (
    <div className="list d-flex">
      <div className="w-100 bg-accent-color">
        <input
          type="text"
          className="header_title bgc-transp main-color"
          placeholder="Name your todo list"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button className="del-list-btn bgc-transp" onClick={rmList}>
          <img
            className="del-list-btn-icon"
            src={trashImg}
            alt="del"
            width="22px"
          />
        </button>
      </div>
      <div className="list_main flex-1 w-100">
        {tasks.map((task, key) => {
          return (
            <Task task={task} tasks={tasks} setTaskList={setTasks} key={key} />
          );
        })}
      </div>
      <div className="d-flex w-100 bg-accent-color">
        <input
          type="text"
          name="taskName"
          placeholder="Enter task"
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
