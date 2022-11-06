import { useState } from "react";

const DelayedToggle = () => {
  const [toggle, setToggle] = useState(false);
  // 1초 후 toggle 값을 반전시키는 함수
  const onToggle = () => {
    setTimeout(() => {
      setToggle((toggle) => !toggle);
    }, 900);
  };
  return (
    <div>
      <button onClick={onToggle}>토글</button>
      <div>
        <span>{toggle ? "ON" : "OFF"}</span>
      </div>
      {toggle && <div>토글됐어!</div>}
    </div>
  );
};

export default DelayedToggle;
