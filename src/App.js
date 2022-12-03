import React, { createRef, useState } from "react";
import Heading from "./component/Heading";
import Input from "./component/Input";
import TodoList from "./component/TodoList";
import data from "./component/data";
import "./styles.css";

function App() {
  const [list, setList] = useState(data);
  const [inputList, setInputList] = useState("");
  const [check, setCheck] = useState("");
  const [togglebutton, setTogglebutton] = useState(true);
  const [editId, setEditId] = useState(null);
  const buttonRef = createRef();

  const clickPara = (id) => {
    console.log(id);
    const newarr = list.map((item, index) => {
      if (item.age === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setList(newarr);
  };

  const deleteList = (id) => {
    const newarr = list.filter((item, index) => {
      if (item.age !== id) {
        return item;
      }
    });
    setList(newarr);
  };

  const editList = (id) => {
    const newarr = list.find((item, index) => {
      if (item.age === id) {
        return item;
      }
    });
    setInputList(newarr.name);
    setTogglebutton(false);
    setEditId(id);
  };
  console.log(editId);

  const addList = () => {
    console.log(inputList);
    if (!inputList) {
      alert("please enter list first");
    } else if (inputList && !togglebutton) {
      setList(
        list.map((item) => {
          if (item.age === editId) {
            return { ...item, name: inputList };
          }
          return item;
        })
      );
      setInputList("");
      setEditId(null);
      setTogglebutton(true);
    } else {
      const addData = {
        name: inputList,
        completed: false
      };
      setList([...list, addData]);
      setInputList("");
    }
  };
  return (
    <>
      <Heading />
      <Input
        inputList={inputList}
        setInputList={setInputList}
        addList={addList}
        buttonRef={buttonRef}
        togglebutton={togglebutton}
      />
      <h3> {check} </h3>
      <TodoList
        list={list}
        clickPara={clickPara}
        deleteList={deleteList}
        editList={editList}
      />
    </>
  );
}
export default App;
