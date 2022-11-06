import DelayedToggle from "../pages/DelayedToggle";
import { render, fireEvent, waitFor, waitForElementToBeRemoved } from "@testing-library/react";

describe("<DelayedToggle />", () => {
  it("토글이 ON일 때 텍스트 표시", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    await waitFor(() => getByText("토글됐어!"));
  });

  it("텍스트 ON/OFF 토글", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    const text = await waitFor(() => getByText("ON"));
    expect(text).toHaveTextContent("ON");
  });

  it("버튼 눌렀을 때 변화 감지", async () => {
    const { getByText, container } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    const mutations = await waitFor(() => getByText("ON"), { container });
    // console.log(mutations);
  });

  it("토글이 OFF일 때 글자 지우기", async () => {
    const { getByText, container } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    await waitFor(
      () => {
        getByText("토글됐어!");
      },
      { container }
    ); // ON 이 됨
    fireEvent.click(toggleButton);
    await waitForElementToBeRemoved(() => getByText("토글됐어!"));
  });
});
