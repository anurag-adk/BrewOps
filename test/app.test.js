describe("App Loading", () => {
  test("App should exist and be valid", () => {
    expect(() => {
      require("../server");
    }).not.toThrow();
  });
});
