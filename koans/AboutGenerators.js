describe("About Generators", function () {

  describe("Basic usage", function () {

    it("should understand syntax", function () {

      // `*` immediately after `function` denotes a generator
      function* createGenerator() {
        //`yield` keyword exits function execution
        yield 1;
      }

      // invoking a generator function returns a generator interface
      // `.next()` is used to `start` a generator
      // Also used to resume function execution to the next `yield`
      var generator = createGenerator();

      expect(generator.next().value).toEqual(FILL_ME_IN);

      var completedGenerator = generator.next()

      expect(completedGenerator.value).toEqual(FILL_ME_IN);
      expect(completedGenerator.done).toEqual(FILL_ME_IN);

      debugger;
    });
  });
});
