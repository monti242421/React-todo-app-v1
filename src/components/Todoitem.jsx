function Todoitem(props) {
  const handleDeleteButton = () => {
    props.onDelete(props.name);
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{props.name}</div>
        <div className="col-4">{props.date}</div>
        <div className="col-2">
          <button
            className="btn btn-danger kg-button"
            type="submit"
            onClick={handleDeleteButton}
          >
            Del
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
