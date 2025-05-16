function AddTodo() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">
          <input type="placeholder" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-primary kg-button" type="submit">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
