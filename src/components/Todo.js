import './Todo.css'
const Todo = () => {
    return(
        <div>
            <header>
        <h1>Todo List</h1>
    </header>
    <form>
      <input type="text" className="todo-input" />
      <button className="todo-button" type="submit" >
        <i className="uil uil-plus"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    <div class="todo-container">
      <ul class="todo-list"></ul>
    </div>
        </div>
    )
}

export default Todo