import trashIcon from "../assets/trash.png";
import check from "../assets/Vector.png";
import style from "./TodoStyle.module.css";
import { useState, useEffect, useRef } from "react";

export function Todo({ text, completeTodo, deleteTodo, id }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const isMounted = useRef(0);

  useEffect(() => {
    if (isMounted.current >= 2) {
      completeTodo(isCompleted);
    } else {
      isMounted.current++;
    }
  }, [isCompleted]);

  function handleComplete() {
    setIsCompleted(!isCompleted);
  }

  function handleDelete() {
    if (isCompleted) {
      deleteTodo(id, true);
    } else {
      deleteTodo(id);
    }
  }

  return (
    <li className={style.todo}>
      <div
        onClick={handleComplete}
        className={`${style.checkbox} ${isCompleted ? "checked" : ""}`}
        type="checkbox"
      >
        {isCompleted ? <img className={style.checked} src={check} /> : ""}
      </div>
      <p
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        className={style.text}
      >
        {text}
      </p>
      <img onClick={handleDelete} src={trashIcon} className={style.icon} />
    </li>
  );
}
