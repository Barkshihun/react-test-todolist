import TodoList from "../pages/TodoList";
import { fireEvent, render } from "@testing-library/react";

describe("<TodoList />", () => {
  const sampleTodos = [
    {
      id: 1,
      text: "TDD 배우기",
      done: true,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true,
    },
  ];

  it("todos를 적절히 렌더한다", () => {
    const { getByText } = render(<TodoList todos={sampleTodos} />);
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
  });

  it("onToggle과 onRemove를 호출한다", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    const { getByText, getAllByText } = render(<TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />);

    fireEvent.click(getByText(sampleTodos[0].text));
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    fireEvent.click(getAllByText("삭제")[0]); // 첫번째 삭제 버튼을 클릭
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
