describe("About Objects", function () {

  describe("Initialiser Shorthand", function () {

    it('should understand usage', function() {

      function passThrough(one, two) {
        return {
          one,
          two
        }
      }

      var data = passThrough('one', 'two');

      expect(typeof data).toEqual(FILL_ME_IN);
      expect(data.one).toEqual(FILL_ME_IN);
      expect(data.two).toEqual(FILL_ME_IN);
    })
  });

  // describe('Method Shorthand', function() {
  //
  //   it('should understand usage', function() {
  //   })
  // })
});
