import { useState } from "react";
import "./styles/Task.css";

const Task = ({ text, done, tasks, setTaskList }) => {
  const [getDone, setDone] = useState(done);

  const taskDelete = () => {
    setTaskList(tasks.filter((value) => value.text !== text));
  };

  const taskDone = () => {
    setTaskList(tasks.filter((value) => value.text !== text));
    setDone(!getDone);
    setTaskList([...tasks]);
  };

  return (
    <div className="task d-flex">
      <p
        className={
          getDone
            ? "task_text flex-1 main-color crossed"
            : "task_text flex-1 main-color"
        }
      >
        {text}
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
