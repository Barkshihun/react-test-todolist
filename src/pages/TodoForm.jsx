import { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [value, setValue] = useState("바보");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setValue("");
        onSubmit(value);
      }}
    >
      <input
        type="text"
        placeholder="새꺄 할 일 입력해"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button type={"submit"}>등록가즈아!!~</button>
    </form>
  );
};

export default TodoForm;
