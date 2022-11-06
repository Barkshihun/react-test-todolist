import { render, waitFor } from "@testing-library/react";
import UserProfile from "../pages/UserProfile";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("<UserProfile />", () => {
  const mock = new MockAdapter(axios, { delayResponse: 200 }); // 200ms 가짜 딜레이 설정
  // API 요청에 대하여 응답 미리 정하기
  mock.onGet("https://jsonplaceholder.typicode.com/users/1").reply(200, {
    id: 1,
    username: "김자반",
    email: "abc@op.com",
    food: "potato",
  });
  it("getUser API가 userData를 올바르게 가져온다", async () => {
    const { getByText } = render(<UserProfile id={1} />);
    await waitFor(() => getByText("로딩중.."));
    await waitFor(() => getByText("김자반"));
  });
});
