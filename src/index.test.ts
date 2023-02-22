import { it, describe, expect } from "vitest";
import { sayHello } from "./index";

describe("testing uppper block", () => {
  it("should pass the hello world", () => {
    expect(sayHello()).toBe("Hello World");
  });
});
