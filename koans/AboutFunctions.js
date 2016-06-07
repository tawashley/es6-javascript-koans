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

  // describe('Rest Paramaters', function() {
  //
  // })
  //
  // describe('Spread Parameters', function() {
  //
  // })
  //
  describe('Arrow Functions', function() {

    it('shound understand basic usage', function() {

      var arrowFn = () => { 'hello world!'; };

      expect(arrowFn()).toEqual(FILL_ME_IN);

      var arrowFnTwo = (number) => { number * 2; }

      expect(arrowFnTwo(4)).toEqual(FILL_ME_IN);

    })

  })
});
