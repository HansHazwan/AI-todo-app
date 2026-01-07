import { TaskListHeaderViewPromps } from "./TaskListHeaderView.type";

export function TaskListHeaderView({
  onTitleClick,
  onDateClick,
  onTickClick,
}: TaskListHeaderViewPromps) {
  return (
    <header>
      <h4>Title</h4>
      <h4>Date</h4>
      <h4>Tick</h4>
    </header>
  );
}
