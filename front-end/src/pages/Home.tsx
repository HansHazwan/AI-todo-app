import { Header } from "../components/Header"

export function HomePage() {

  return (
    <div className="container">
      <Header label={"AI Todo App"} />
      <div className="content">
        <div className="utilities">
          <button>Add</button>
          <input type="text" />
        </div>
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
