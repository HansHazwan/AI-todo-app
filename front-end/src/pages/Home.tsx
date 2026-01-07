import { Header } from "../components/Header"
import { TaskListView } from "../components/TaskListView";
import { TaskToolbar } from "../components/TaskToolbar"
import { useState } from "react";
import { Task } from "../types/Task";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { ID: 0, title: "Doing Homework", description: "Must Done Tomorrow", isDone: false, date: new Date() },
    { ID: 1, title: "Complete ESP32 project document", isDone: true, date: new Date() },
    { ID: 1, title: "Doing Homework", description: "Must Done Tomorrow", isDone: false, date: new Date() },
  ]);

  return (
    <div className="container">
      <Header title={"AI Todo App"} onRightClick={() => { console.log("Hello") }} />
      <TaskToolbar
        newActionButton={() => {
          console.log("New Task");
        }}
        searchActionButton={(search: String) => {
          console.log(search);
        }}
      />
      <TaskListView taskList={tasks} />
    </div>

  )
}
