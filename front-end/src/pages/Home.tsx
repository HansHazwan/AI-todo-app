import { Header } from "../components/Header"
import { TaskToolbar } from "../components/TaskToolbar"

export function HomePage() {

  return (
    <div className="container">
      <Header title={"AI Todo App"} onRightClick={() => { console.log("Hello") }} />
      <div className="content">
        <TaskToolbar
          newActionButton={() => {
            console.log("New Task");
          }}
          searchActionButton={(search: String) => {
            console.log(search);
          }}
        />
        <div className="todoList">
          <ul>
            <li>
              <p>title</p>
              <p>description</p>
              <p>createdAt</p>
              <p>deadline</p>
            </li>
            <li>
              <p>A title</p>
              <p>A Description</p>
              <p>30/12/2025</p>
              <p>2025-12-30 23:26</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}
