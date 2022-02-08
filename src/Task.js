import "./styles/Task.css";

const Task = ({ task, tasks, setTaskList }) => {
  const taskDelete = () => {
    setTaskList(tasks.filter((value) => value.text !== task.text));
  };

  const taskDone = () => {
    task.done = !task.done;
    const filteredTasks = tasks.filter((value) => value.text !== task.text);
    filteredTasks.push(task);
    setTaskList(filteredTasks);
  };

  return (
    <div className="task d-flex">
      <p
        className={
          task.done
            ? "task_text flex-1 main-color crossed"
            : "task_text flex-1 main-color"
        }
      >
        {task.text}
      </p>
      <button
        type="button"
        onClick={taskDone}
        className="task_btn done_btn bgc-transp"
      >
        done
      </button>
      <button
        type="button"
        onClick={taskDelete}
        className="task_btn del_btn bgc-transp"
      >
        del
      </button>
    </div>
  );
};

export default Task;
