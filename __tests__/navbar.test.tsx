import { render, screen } from "@testing-library/react";
import Navbar from "../components/navbar";

describe("Navbar", () => {
  it("renders without crashing", () => {
    const view = render(<Navbar />);
    console.log(view);
  });

  it("renders a heading", () => {
    render(<Navbar />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("contains a link to nextjs site", () => {
    render(<Home />);
    const link = screen.getByRole("link", {
      name: "Next.js!",
    });
  });
});
