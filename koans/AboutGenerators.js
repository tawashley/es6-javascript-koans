describe("About Generators", function () {

  describe("Usage", function () {

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

    it('should understand how generators can be used as iterators', function() {
      var collection = [];
      var iterator;

      function* generator() {
        yield 'a';
        yield 'b';
        yield 'c';
        yield 'd';
      }

      iterator = generator();

      for (letter of iterator) {
        collection.push(letter);
      }

      expect(collection.join('')).toEqual(FILL_ME_IN);
      expect(iterator.next().done).toEqual(FILL_ME_IN);
    })

    it('should understand custom iterables can be created', function() {
      var lordOfRingFilms  = {
        names: [
          'The Fellowship of the Ring',
          'The Two Towers',
          'The Return of the king'
        ],
        nameDescriptions: [],
        *[Symbol.iterator]() {
          for (var i = 0; i < this.names.length; i++) {
            yield 'Film ' + (i+1) + ' -> Lord of the rings: ' + this.names[i];
          }
        }
      }

      for (description of lordOfRingFilms) {
        lordOfRingFilms.nameDescriptions.push(description);
      }

      var descriptions = lordOfRingFilms.nameDescriptions;

      expect(descriptions.length).toEqual(FILL_ME_IN);
      expect(descriptions[0]).toEqual(FILL_ME_IN);
      expect(descriptions[2]).toEqual(FILL_ME_IN);
    })
  });
});
