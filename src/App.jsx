import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const initialtodoitems = [
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

  let [todoitems, settodoitems] = useState(initialtodoitems);

  const handleAddChange = (itemName, dueDate) => {
    let newtodoitems = [...todoitems, { name: itemName, duedate: dueDate }];
    settodoitems(newtodoitems);
  };

  const handleDeleteChange = (itemName) => {
    let newtodoitems = todoitems.filter((item) => item.name !== itemName);
    settodoitems(newtodoitems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onAddChange={handleAddChange}></AddTodo>
      <Todoitems
        todoitems={todoitems}
        onDelete={handleDeleteChange}
      ></Todoitems>
    </center>
  );
}

export default App;
