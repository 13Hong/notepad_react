import TodoList from "./components/TodoList"
import AddTodoForm from "./components/AddTodoForm"
import TodoSummary from "./components/TodoSummary"
import useTodos from "./hook/useTodos"

function App() {
  const {todos, addTodo, setTodoCompleted, deleteTodo, deleteAllCompleted} = useTodos()
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="text-3xl font-bold text-center">Your Todos</h1>
      <div>
        <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
          <AddTodoForm onSubmit={addTodo}/>
          <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo}/>
        </div>
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted}/>
    </main>
  )
}

export default App
