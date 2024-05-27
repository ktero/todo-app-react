import { useState } from 'react'
import { NewTodoForm } from './Components/NewTodoForm/NewTodoForm'
import { TodoList } from './Components/TodoList/TodoList'
import { useEffect } from 'react'

import './App.css'

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title, description) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { 
          id: crypto.randomUUID(), 
          title, 
          description,
          completed: false
        }
      ]
    })
  }

  function editTodo(id, title, description) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo
      )
    );
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h3>Todo List</h3>
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo}  
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  )
}
