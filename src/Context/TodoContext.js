import React, { createContext, useState } from "react";
export const TodoContext = createContext(null);
const tmpTodos = [
  { id: 1, text: "learn react" },
  { id: 2, text: "learn Mongodb" },
  { id: 3, text: "learn Node" },
];
const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(tmpTodos);
  const addHandler = (texts) => {
    setTodos((prev) => {
      return [...prev, { id: prev.length + 1, text: texts }];
    });
    // console.log(todos);
  };
  const deleteHandler = (item) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== item;
      });
    });
  };
  const contextValue = {
    todos,
    addHandler,
    deleteHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;
