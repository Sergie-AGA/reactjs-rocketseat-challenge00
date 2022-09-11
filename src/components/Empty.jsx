import clipboard from "../assets/clipboard.png";
import style from "./EmptyStyle.module.css";

export function Empty() {
  return (
    <div className={style.container}>
      <img src={clipboard} className={style.img} />
      <div>
        <p className={style.text}>Você ainda não tem tarefas cadastradas</p>
        <p className={style.text}>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
