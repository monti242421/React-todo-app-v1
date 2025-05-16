import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoitems = [
    {
      name: "Buy Milk",
      duedate: "4/10/2020",
    },

    {
      name: "Go to college",
      duedate: "4/10/2020",
    },
    {
      name: "like this video",
      duedate: "4/10/2020",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <Todoitems todoitems={todoitems}></Todoitems>
    </center>
  );
}

export default App;
