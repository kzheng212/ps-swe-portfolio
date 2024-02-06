import { useReducer } from "react";

// Import Data
import { initialState } from "./data/todosData";

// Import Components
import { todosReducer } from "./reducers/todosReducer";
import TodosList from "./components/TodosList";

// Import Styles
import "./App.css";

export default function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodosList todos={todos} dispatch={dispatch} />
    </div>
  );
}
