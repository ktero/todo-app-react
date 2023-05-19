/* eslint-disable react/prop-types */

import { useState } from "react"

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {

    const [isEditing, setIsEditing] = useState(false)
    const [todoTitle, setTodoTitle] = useState(title)

    function handleEdit(e) {
        e.preventDefault()
        editTodo(id, todoTitle)
        setIsEditing(false)
    }

    return (
        <li>
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            { isEditing ? (
                <form onSubmit={handleEdit}>
                    <input 
                        type="text"
                        placeholder={title}
                        onChange={(e) => setTodoTitle(e.target.value)}
                    />
                    <button type="submit">Save</button>
                    <button>Cancel</button>
                </form>
                ) : (
                    <>
                        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}  >
                            { title }
                        </span>
                        <button 
                            onClick={() => deleteTodo(id)}
                        >
                        Delete
                        </button>
                        <button 
                            onClick={() => setIsEditing(true)}>
                        Edit
                        </button>
                    </>
                )
            }
        </li>
    )
}