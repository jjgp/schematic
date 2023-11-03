import fs from "fs";
import grammar from "../src/schematic.ohm-bundle";

describe("grammar", () => {
  it("should match", () => {
    // Given
    const source = fs.readFileSync("test/example.schematic", "utf-8");

    // When
    const matchResult = grammar.match(source);

    // Then
    expect(matchResult.succeeded()).toBe(true);
  });
});
