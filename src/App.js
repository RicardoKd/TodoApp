import { useState } from "react";
import List from "./List";
import "./styles/App.css";

function App() {
  let a = [];

  for (let i = 0; i < localStorage.length; i++) {
    let item = JSON.parse(localStorage.getItem(i));
    a.push(item);
  }
  const [lists, setLists] = useState(a);

  const createNewList = () => {
    setLists([
      {
        name: "New TodoX",
        taskList: [],
      },
      ...lists,
    ]);
  };

  return (
    <div>
      <header className="bg-accent-color">
        <button
          type="button"
          className="fill bgc-transp"
          onClick={createNewList}
        >
          Create new TodoX
        </button>
      </header>
      <main>
        {lists.map((list, key) => (
          <List
            todoLists={lists}
            setTodoLists={setLists}
            storageInd={key}
            key={key}
          />
        ))}
      </main>
      <footer className="bg-accent-color">
        <p className="developer main-color">
          Developed_by_
          <a
            className="developer-link"
            href="https://www.linkedin.com/in/richard-kadian"
          >
            Richard Kadian
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
