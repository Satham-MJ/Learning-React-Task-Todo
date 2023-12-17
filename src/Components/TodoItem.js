import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const TodoItem = ({ text, id }) => {
  const { deleteHandler } = useContext(TodoContext);
  return (
    <li>
      <p>{text}</p>
      <button onClick={() => deleteHandler(id)}>X</button>
    </li>
  );
};

export default TodoItem;
