import "./style.css";

function TodoList(props) {
  return (
    <>
      {props.list.map((item, index) => {
        return (
          <div key={item.age} className="div-style">
            <p
              className={item.completed ? "completed" : "not-completed"}
              onClick={() => props.clickPara(item.age)}
            >
              {item.name}
            </p>
            <div>
              <div className="buttonBox">
                <button
                  className="deleteButton"
                  onClick={() => props.deleteList(item.age)}
                >
                  delete
                </button>
                <button
                  className="deleteButton"
                  onClick={() => props.editList(item.age)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default TodoList;
