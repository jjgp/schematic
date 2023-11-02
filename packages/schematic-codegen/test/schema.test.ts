import grammar from "../src/schema.ohm-bundle";

describe("grammar", () => {
  it("should match text component", () => {
    // Given
    const input = `component Text { verbatim: string; }`;

    // When
    const matchResult = grammar.match(input);

    // Then
    expect(matchResult.succeeded()).toBe(true);
  });
});
