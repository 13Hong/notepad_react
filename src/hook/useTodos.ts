import { useState, useEffect } from "react"
import { Todo } from "../type/todo"
import { dummyData } from "../data/todos"

export default function useTodos () {
    const[todos,setTodos] = useState(() => {
        const savedTodos:Todo[] = JSON.parse(localStorage.getItem("todos") || "[]")
        return savedTodos.length > 0 ? savedTodos : dummyData
      })
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
      },[todos])
    
      const setTodoCompleted = (id: number, completed: boolean) => {
        setTodos((prevTodos) =>
           prevTodos.map(todo => todo.id === id ? {...todo, completed: completed} : todo)
        )
      }
    
      const addTodo = (title: string) => {
        setTodos((prevTodos) => [{id: Date.now(), title, completed: false},...prevTodos])
      }
    
      const deleteTodo = (id: number) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id))
      }
    
      const deleteAllCompleted = () => {
        setTodos((prevTodos) => prevTodos.filter(todo => !todo.completed))
      }
    
      return {todos, setTodoCompleted, addTodo, deleteTodo, deleteAllCompleted}
}