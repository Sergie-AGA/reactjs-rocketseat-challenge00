import { Todo } from "./components/Todo";
import { Empty } from "./components/Empty";
import { useState } from "react";
import Main from "./app.module.css";
import styles from "./global.css";

import { HeaderContainer } from "./components/HeaderContainer";

function App() {
  const [todos, setTodos] = useState([]);
  const [finished, setFinished] = useState(0);

  function addTodos(todo) {
    setTodos([...todos, todo]);
  }

  function completeTodo(value) {
    if (value) {
      setFinished(finished + 1);
    } else {
      setFinished(finished - 1);
    }
  }

  function deleteTodo(id, completion) {
    if (completion) {
      completeTodo(false);
    }
    console.log(id);
    const newTodoList = todos.filter((todo) => todo.id !== id);
    console.log(newTodoList);
    setTodos(newTodoList);
  }

  return (
    <div className="app">
      <HeaderContainer addTodos={addTodos} />
      <main className={Main.main}>
        <div className={Main.header}>
          <div className={Main.left}>
            Tarefas criadas <span className={Main.number}>{todos.length}</span>
          </div>
          <div className={Main.right}>
            Concluídas{" "}
            <span className={Main.number}>
              {todos.length ? `${finished} de ${todos.length}` : finished}
            </span>
          </div>
        </div>

        {todos.length == 0 ? (
          <Empty />
        ) : (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              text={todo.text}
            />
          ))
        )}
      </main>
    </div>
  );
}

export default App;
