/* eslint-disable react/prop-types */

import { useState } from "react"

export function NewTodoForm({ addTodo }) {
    const [newItem, setNewItem] = useState("")
    const [newDescription, setNewDescription] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
    
        if (newItem === "") return

        addTodo(newItem, newDescription)
    
        setNewItem("")
        setNewDescription("")
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">New Item</label>
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)}
            type="text" 
            id="item" 
          />
          <label htmlFor="description">Add description</label>
          <input 
            value={newDescription} 
            onChange={e => setNewDescription(e.target.value)}
            type="text" 
            id="description" 
          />
        </div>
        <button>Add</button>
      </form>
    )
}