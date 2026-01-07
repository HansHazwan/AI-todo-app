import { TaskViewPromps } from "./TaskView.type";
import Styles from "./TaskView.module.css";

export function TaskView({ title, isTick, date }: TaskViewPromps) {
  return (
    <header className={Styles.container}>
      <h5 className={Styles.title}>{title}</h5>
      <p className={Styles.date}>{date.toDateString()}</p>
      <input
        className={Styles.checkbox}
        type={"checkbox"}
        checked={isTick}
      />
    </header>
  );
}
