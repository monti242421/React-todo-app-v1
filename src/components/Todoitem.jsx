function Todoitem(props) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{props.name}</div>
        <div className="col-4">{props.date}</div>
        <div className="col-2">
          <button className="btn btn-danger kg-button" type="submit">
            Del
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
