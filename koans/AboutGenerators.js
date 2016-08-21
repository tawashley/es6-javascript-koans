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

      //Values of a finished generator
      expect(completedGenerator.done).toEqual(FILL_ME_IN);
      expect(completedGenerator.value).toEqual(FILL_ME_IN);
    });

    it('should understand use of `yield`', function() {
      function* multiplyNumber(number) {
        yield number*1;
        yield number*2;
        yield number*3;
        yield number*4;
        yield number*5;
      }

      var generator = multiplyNumber(10);

      //first
      expect(generator.next().value).toEqual(FILL_ME_IN);
      //second
      expect(generator.next().value).toEqual(FILL_ME_IN);
      //third
      expect(generator.next().value).toEqual(FILL_ME_IN);
      //fourth
      expect(generator.next().value).toEqual(FILL_ME_IN);
      //fifth
      expect(generator.next().value).toEqual(FILL_ME_IN);
    })
  });
});
