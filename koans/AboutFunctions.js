describe("About Functions", function () {

  describe("Default Parameters", function () {

    it("should understand default parameters basic usage", function () {

      function greeting(string = 'party') {
        return 'Welcome to the ' + string + ' pal!';
      }

      expect(greeting()).toEqual(FILL_ME_IN);
      expect(greeting('get together')).toEqual(FILL_ME_IN);
      expect(undefined).toEqual(FILL_ME_IN);
      expect(null).toEqual(FILL_ME_IN);

      function getDefaultValue() {
        return 'party';
      }

      function greetingAgain(string = getDefaultValue()) {
        return 'Welcome to the ' + string + ' pal!';
      }

      expect(greetingAgain()).toEqual(FILL_ME_IN);
    });
  });

  describe('Rest Parameters', function() {

    it('should understand how it populates function parameters', function() {

      var setPersonName = function(firstName, lastName, ...middleNames) {
        return {
          middleNames: middleNames
        }
      }

      var author = setPersonName('Arthur', 'Clarke', 'C');

      //Array
      expect(typeof author.middleNames).toEqual(FILL_ME_IN);
      expect(author.middleNames.length).toEqual(FILL_ME_IN);
      expect(author.middleNames[0]).toEqual(FILL_ME_IN);
    })
  })

  describe('Spread Parameters', function() {

    var numbers = [1,2,3,4];
    var sumFourNumbers = function(one, two, three, four) {
      return one + two + three + four;
    }

    expect(sum(...numbers)).toEqual(FILL_ME_IN);
  })

  describe('Arrow Functions', function() {

    it('shound understand syntax', function() {

      var arrowFn = string => string;
      expect(typeof arrowFn).toEqual(FILL_ME_IN)
      expect(arrowFn instanceof Function).toEqual(FILL_ME_IN);

      expect(arrowFn('hello')).toEqual(FILL_ME_IN);

      var arrowFnTwo = (number) => number * 2;
      expect(arrowFnTwo(4)).toEqual(FILL_ME_IN);

      var arrowFnThree = () => 1337;
      expect(arrowFnThree(4)).toEqual(FILL_ME_IN);

      var arrowFnFour = () => ({  id: 1337 });
      expect(typeof arrowFnFour()).toEqual(FILL_ME_IN);
      expect(arrowFnFour()).toEqual(FILL_ME_IN);

      var arrowFnFive = ((number) => { 'there are ' + number + ' days in a week'; })(7);
      expect(arrowFnFive).toEqual(FILL_ME_IN);

      // Concise array operations
      // var values = [1, 6, 7, 2, 6];
      // var sortedArray = values.sort((a, b) => a - b);
    })

  })
});
