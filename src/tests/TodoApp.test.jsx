import { render, fireEvent } from "@testing-library/react";
import TodoApp from "../pages/TodoApp";

describe("<TodoApp />", () => {
  const setUp = () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<TodoApp />);
    const input = getByPlaceholderText("새꺄 할 일 입력해");
    const btn = getByText("등록가즈아!!~");
    fireEvent.change(input, { target: { value: "TDD 배우기" } });
    fireEvent.click(btn);
    fireEvent.change(input, { target: { value: "삼겹살 먹기" } });
    fireEvent.click(btn);
    fireEvent.click(getByText("TDD 배우기"));
    fireEvent.click(getByText("삼겹살 먹기"));
    return {
      getByPlaceholderText,
      getByText,
      getByTestId,
    };
  };

  it("기본 todos 2개 렌더", () => {
    const { getByText } = setUp();
    getByText("TDD 배우기");
    getByText("삼겹살 먹기");
  });

  it("TodoList 확인", () => {
    const { getByTestId } = setUp();
    getByTestId("TodoList"); // TodoList 존재유무 확인
  });

  it("새로운 todo 만들기", () => {
    const { getByPlaceholderText, getByText } = setUp();
    fireEvent.change(getByPlaceholderText("새꺄 할 일 입력해"), {
      target: {
        value: "햄버거 먹고 싶다",
      },
    });
    fireEvent.click(getByText("등록가즈아!!~"));
    getByText("햄버거 먹고 싶다");
  });

  it("todo 토글하기", () => {
    const { getByText } = setUp();
    const todoText1 = getByText("TDD 배우기");
    const todoText2 = getByText("삼겹살 먹기");
    expect(todoText1).toHaveStyle("text-decoration: line-through;");
    expect(todoText2).toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText1);
    fireEvent.click(todoText2);
    expect(todoText1).not.toHaveStyle("text-decoration: line-through;");
    expect(todoText2).not.toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText1);
    fireEvent.click(todoText2);
    expect(todoText1).toHaveStyle("text-decoration: line-through;");
    expect(todoText2).toHaveStyle("text-decoration: line-through;");
  });

  it("todo 지우기", () => {
    const { getByText } = setUp();
    const todoText = getByText("TDD 배우기");
    const removeButton = todoText.nextSibling;
    fireEvent.click(removeButton);
    expect(todoText).not.toBeInTheDocument(); // 페이지에서 사라졌음을 의미함
  });
});
