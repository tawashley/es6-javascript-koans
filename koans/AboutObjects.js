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

  describe('Computed Names', function() {
    it('should understand computed names usage', function() {
      var car = 'ford';
      var engine = 'Engine';

      var carDetails = {
        [car] : {
          [car + 'Doors']: 4,
          [car + engine]: 'v8',
          [car + 'Model'] : 'Mustang'
        }
      }

      expect(typeof FILL_ME_IN).toEqual('object');
      expect(FILL_ME_IN).toEqual(4);
      expect(FILL_ME_IN).toEqual('v8');
      expect(FILL_ME_IN).toEqual('Mustang');

    })
  })

  describe('Duplicate Literal Properties', function() {

    it('should understand have duplicate keys are handled', function() {
      var newJsStandard = {
        name: 'harmony',
        name: 'es6',
        name: 'es2015'
      };

      expect(newJsStandard.name).toEqual(FILL_ME_IN);
    })

  })
});
