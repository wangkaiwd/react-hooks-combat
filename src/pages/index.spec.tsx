import { render } from "@testing-library/react";
import IndexPage from "@/pages/index";

describe("IndexPage", () => {
  it("should render", () => {
    const app = render(<IndexPage />);
    console.log(app);
  });
});
