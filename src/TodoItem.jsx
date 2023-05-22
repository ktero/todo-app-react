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
                        id="edit-item"
                        data-test="edit-item"
                    />
                    <input 
                        type="text"
                        placeholder={description}
                        onChange={(e) => setTodoDescription(e.target.value)}
                        id="edit-description"
                        data-test="edit-description"
                    />
                    <button type="submit">Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </form>
                ) : (
                    <>
                        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}  >
                            <span data-test="todo-title">{ title }</span>
                            <span data-test="todo-description">{ description }</span>
                        </span>
                        <button 
                            onClick={() => setIsEditing(true)}
                            id="button-edit"
                            data-test="button-edit"
                        >
                        Edit
                        </button>
                        <button 
                            onClick={() => deleteTodo(id)}
                            id="button-delete"
                            data-test="button-delete"
                        >
                        Delete
                        </button>
                    </>
                )
            }
        </li>
    )
}