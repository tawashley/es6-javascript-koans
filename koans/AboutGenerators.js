describe("About Generators", function () {

  describe("Basic usage", function () {

    it("should understand concept", function () {
      function* createGenerator() {
        //`yield` keyword exits function execution
        yield 1;
      }

      var generator = createGenerator();

      expect(generator.next().value).toEqual(FILL_ME_IN);

      var completedGenerator = generator.next()
      
      expect(completedGenerator.value).toEqual(FILL_ME_IN);
      expect(completedGenerator.done).toEqual(FILL_ME_IN);

      debugger;
    });
  });
});
