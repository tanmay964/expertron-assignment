import React, { useEffect, useState } from 'react'
import APIHelper from './APIHelper';

function Task() {
    const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const fetchTodoAndSetTodos = async () => {
      const todos = await APIHelper.getAllTodos();
      setTodos(todos);
    };
    fetchTodoAndSetTodos();
  }, []);

  const createTodo = async e => {
    e.preventDefault();
    if (!todo) {
      alert("please enter something");
      return;
    }
    if (todos.some(({ task }) => task === todo)) {
      alert(`Task: ${todo} already exists`);
      return;
    }
    const newTodo = await APIHelper.createTodo(todo);
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (e, id) => {
    try {
      e.stopPropagation();
      await APIHelper.deleteTodo(id);
      setTodos(todos.filter(({ _id: i }) => id !== i));
    } catch (err) {}
  };

  const updateTodo = async (e, id) => {
    e.stopPropagation();
    const payload = {completed: !todos.find(todo => todo._id === id).completed}
    const updatedTodo  = await APIHelper.updateTodo(id, payload);
    setTodos(todos.map((todo)=> todo._id === id ? updatedTodo: todo));
    
  };
    return (
        <div className = "task">
            <div className = "task-search">
            <input className = "task-searchInput"
          type="text"
          value={todo}
          onChange={({ target }) => setTodo(target.value)}
          placeholder="Enter a task"
        />
        <button className = "task-button" type="button" onClick={createTodo}>
          Add Your Task
        </button>
      </div>

      <ol className = "task-list">
        {todos.length ? todos.map(({ _id, task, completed }, i) => (
          <li
            key={i}
            onClick={e => updateTodo(e, _id)}
            className={completed ? "completed" : ""}
          >
            {task} <span className="task-span" onClick={e => deleteTodo(e, _id)}>x</span>
          </li>
        )): <p>No Tasks Yet:(</p>}
      </ol>
        </div>
    )
}

export default Task
