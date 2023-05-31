/* eslint-disable react/prop-types */

import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
      <ul id="todo-list" data-test="todo-list">
      <span data-test="todo-counter">{ todos.length === 0 ? "No Todos" : `Number of TODO items: ${todos.length}`}</span>
      { todos.map(todo => {
        return (
          <TodoItem 
              {...todo} 
              key={todo.id} 
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
          />
        )
      }) }
    </ul>
  )
}