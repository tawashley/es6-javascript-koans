describe("About Objects", function () {

  describe("Shorthand Syntax", function () {

    it('should understand initailiser shorthand', function() {

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

    it('should understand method shorthand', function() {
      var utils = {
        uppercase(string) {
          return string.toUpperCase();
        }
      };

      expect(typeof utils.uppercase).toEqual(FILL_ME_IN);
      expect(typeof utils.uppercase('upper')).toEqual(FILL_ME_IN);
    })
  });
});
