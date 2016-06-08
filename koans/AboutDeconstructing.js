describe("About Deconstructing", function () {

  describe("Object", function () {

    it("should understand variable declaration usage", function () {
      var person = {
        name: 'Tim',
        age: 26
      };

      var { name, age } = person;

      expect(name).toEqual(FILL_ME_IN);
      expect(age).toEqual(FILL_ME_IN);
    });

    it('should understand variable assignment usage', function() {
      var person = {
        name: 'Tim',
        age: 26,
      };
      var name;

      ({name, height} = person);

      expect(name).toEqual(FILL_ME_IN);
      expect(height).toEqual(FILL_ME_IN);
    })

    it('should understand default values', function() {
      var person = {
        name: 'Tim',
        age: 26,
      };

      var { name, age, height = '6 foot' } = person

      expect(name).toEqual(FILL_ME_IN);
      expect(height).toEqual(FILL_ME_IN);
    })

    it('should understand local variable names', function() {
      var person = {
        name: 'Tim',
        age: 26
      };

      var {name: justName, age: justAge} = person;

      expect(name).toEqual(FILL_ME_IN);
      expect(justName).toEqual(FILL_ME_IN);
      expect(age).toEqual(FILL_ME_IN);
      expect(justAge).toEqual(FILL_ME_IN);
    })

    it('should understand nested deconstructing', function() {
      let people = {
        tim: {
          age: 26,
          name: {
            first: 'Tim',
            last: 'Jones'
          },
          height: {
            feet: 6
          }
        }
      }

      var { tim: { name }} = people;
      var { tim: { height: { feet }}} = people;
      var { tim: { height: { feet:timHeightInFeet }}} = people;

      expect(name).toEqual(FILL_ME_IN);
      expect(feet).toEqual(FILL_ME_IN);
      expect(timHeightInFeet).toEqual(FILL_ME_IN);
    })
  });

  // describe('Arrays', function() {
  //
  // })
});
