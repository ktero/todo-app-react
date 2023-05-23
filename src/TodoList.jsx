/* eslint-disable react/prop-types */

import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
      <ul id="todo-list" data-test="todo-list">
      { todos.length === 0 && "No Todos"}
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