import React, { useContext } from "react";
import AddForm from "./AddForm";
import { TodoContext } from "../Context/TodoContext";
import TodoItem from "./TodoItem";
const Todos = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h1>Todo List</h1>
      <AddForm />
      <ul>
        {todos.map((todo, i) => {
          return <TodoItem text={todo.text} key={i} id={todo.id} />;
        })}
      </ul>
    </div>
  );
};

export default Todos;
