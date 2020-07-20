import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("app tests", () => {
   it("renders without crashing", () => {
      const { baseElement } = render(<App />);
      expect(baseElement).toBeDefined();
   });
});
