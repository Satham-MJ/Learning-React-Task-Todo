import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

const AddForm = () => {
  const { addHandler } = useContext(TodoContext);
  const [textValue, setTextValue] = useState(null);
  return (
    <div className="addForm">
      <form
        method=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <textarea
          value={textValue}
          name=""
          id=""
          rows="4"
          placeholder="Enter Todo Item..."
          onChange={(e) => setTextValue(e.target.value)}
        ></textarea>
        <button
          onClick={() => {
            addHandler(textValue);
            setTextValue("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
