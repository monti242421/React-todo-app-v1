import { useState } from "react";

function AddTodo(props) {
  const [itemName, setItemName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleAddButton = () => {
    props.onAddChange(itemName, dueDate);
    setItemName("");
    setDueDate("");
  };

  const handleInputName = (event) => {
    setItemName(event.target.value);
  };

  const handleInputDate = (event) => {
    setDueDate(event.target.value);
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="placeholder"
            value={itemName}
            onChange={handleInputName}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleInputDate} />
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary kg-button"
            type="submit"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
