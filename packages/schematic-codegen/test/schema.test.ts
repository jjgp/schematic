import grammar from "../src/schema.ohm-bundle";

var input = `component Text { verbatim: string; }`;

describe("grammar", () => {
  it("should match text component", () => {
    const matchResult = grammar.match(input);
    expect(matchResult.succeeded()).toBe(true);
  });
});
