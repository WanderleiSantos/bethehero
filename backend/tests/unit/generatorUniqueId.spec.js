const generatorUniqueId = require("../../src/utils/generatorUniqueId.js");

describe("Generate Unique ID", () => {
  it("should generate an unique ID", () => {
    const id = generatorUniqueId();
    expect(id).toHaveLength(8);
  });
});
