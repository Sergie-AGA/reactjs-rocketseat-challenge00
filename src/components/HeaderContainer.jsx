import Header from "./Header.module.css";
import logoImage from "../assets/Logo.png";
import addIcon from "../assets/plus.png";
import { useState } from "react";

export function HeaderContainer({ addTodos }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit() {
    event.preventDefault();
    addTodos({ text: newTodo, isCompleted: false, id: new Date().getTime() });
    event.target.text.value = "";
  }

  function handleInvalid() {
    event.target.setCustomValidity("This field is required");
  }

  function handleTyping() {
    event.target.setCustomValidity("");
    setNewTodo(event.target.value);
  }

  return (
    <>
      <header className={Header.header}>
        <img src={logoImage} className={Header.logo} />
      </header>
      <form onSubmit={handleSubmit} className={Header["search-container"]}>
        <input
          name="text"
          type="text"
          required
          onInvalid={handleInvalid}
          onChange={handleTyping}
          className={Header.input}
          placeholder="Adicione uma nova tarefa"
        ></input>
        <button className={Header["search-button"]}>
          Criar <img src={addIcon} className={Header.addIcon} />
        </button>
      </form>
    </>
  );
}
