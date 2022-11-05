import { fireEvent, render } from "@testing-library/react";
import TodoForm from "../pages/TodoForm";

describe("<TodoForm />", () => {
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByRole, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("새꺄 할 일 입력해"); // input 이 있는지 확인
    const button = getByRole("button", { name: "등록가즈아!!~" }); // button이 있는지 확인
    return {
      ...utils,
      input,
      button,
    };
  };
  it("인풋과 버튼이 있어야 함", () => {
    const { input, button } = setup();
    expect(input).toBeTruthy(); // 해당 값이 truthy 한 값인지 확인
    expect(button).toBeTruthy();
  });

  it("인풋 바꿔", () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveValue("TDD 배우기");
  });

  it("모크 함수 onSubmit 호출, 버튼 누르면 clear", () => {
    const onSubmit = jest.fn();
    const { input, button } = setup({ onSubmit }); // props 가 필요 할땐 이렇게 직접 파라미터로 전달
    // 수정하고
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    // 버튼 클릭
    fireEvent.click(button);
    expect(onSubmit).toBeCalledWith("TDD 배우기"); // onSubmit 가 'TDD 배우기' 파라미터가 호출됐어야함
    expect(input).toHaveValue(""); // input이 비워져야함
  });
});
