import grammar from '../src/schema.ohm-bundle';

describe("schema", () => {
  it("should match 42", () => {
    const matchResult = grammar.match("42");
    expect(matchResult.succeeded()).toBe(true);
  });
});
