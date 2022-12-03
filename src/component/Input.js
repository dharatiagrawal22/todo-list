function Input(props) {
  return (
    <>
      <input
        className="inputField"
        value={props.inputList}
        placeholder="add your list"
        onChange={(e) => {
          props.setInputList(e.target.value);
        }}
      />
      {props.togglebutton ? (
        <button className="button" onClick={props.addList}>
          Add
        </button>
      ) : (
        <button className="button" onClick={props.addList}>
          Edit
        </button>
      )}
    </>
  );
}
export default Input;
