/* eslint-disable react/prop-types */

import { useState } from "react"

export function TodoItem({ completed, id, title, description, toggleTodo, deleteTodo, editTodo }) {

    const [isEditing, setIsEditing] = useState(false)
    const [todoTitle, setTodoTitle] = useState(title)
    const [todoDescription, setTodoDescription] = useState(description)

    function handleCancel() {
        setTodoTitle(title)
        setTodoDescription(description)
    }

    function handleEdit(e) {
        e.preventDefault()
        editTodo(id, todoTitle, todoDescription)
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
                    <input 
                        type="text"
                        placeholder={description}
                        onChange={(e) => setTodoDescription(e.target.value)}
                    />
                    <button type="submit">Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </form>
                ) : (
                    <>
                        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}  >
                            { title }
                            { description }
                        </span>
                        <button 
                            onClick={() => setIsEditing(true)}>
                        Edit
                        </button>
                        <button 
                            onClick={() => deleteTodo(id)}
                        >
                        Delete
                        </button>
                    </>
                )
            }
        </li>
    )
}