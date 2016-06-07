describe("About Functions", function () {

  describe("Default Parameters", function () {

    it("should understand how default parameters are handled", function () {

      function greeting(string = 'party') {
        return 'Welcome to the ' + string + ' pal!';
      }

      expect(greeting()).toEqual(FILL_ME_IN);
      expect(greeting('get together')).toEqual(FILL_ME_IN);
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
  // describe('Arrow Functions', function() {
  //
  // })
});
