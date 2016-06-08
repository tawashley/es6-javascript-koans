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

  describe('Arrays', function() {

    it('should understand variable declaration usage', function() {
      var colours = ['red', 'blue', 'green', 'purple'];

      var [ firstColour, secondColour ] = colours;
      var [,,, mysteryColour] = colours;

      expect(firstColour).toEqual(FILL_ME_IN);
      expect(secondColour).toEqual(FILL_ME_IN);
      expect(mysteryColour).toEqual(FILL_ME_IN);
    })

    it('should understand variable assignment usage', function() {
      var colours = ['red', 'blue', 'green', 'purple'];
      var firstColour;
      var secondColour;

      [ firstColour, secondColour ] = colours;

      expect(firstColour).toEqual(FILL_ME_IN);
      expect(secondColour).toEqual(FILL_ME_IN);
    })

    it('should understand default values', function() {
      var colours = ['purple'];

      var [ firstColour, secondColour = 'pink' ] = colours;

      expect(firstColour).toEqual(FILL_ME_IN);
      expect(secondColour).toEqual(FILL_ME_IN);
    });

    it('should understand Rest items', function() {
      var colours = ['red', 'blue', 'green', 'purple'];

      var [firstColour, ...restOfTheColours] = colours;

      expect(firstColour).toEqual(FILL_ME_IN);
      expect(typeof restOfTheColours).toEqual(FILL_ME_IN);
      expect(restOfTheColours.length).toEqual(FILL_ME_IN);
      expect(restOfTheColours[1]).toEqual(FILL_ME_IN);
    })

  })

  describe('Mixed types', function() {
    var tim = {
      age: 26,
      height: {
        foot: 6
      },
      ageRange: [25, 30],
      features: ['beard', 'long-hair']
    };

    var {
      age,
      features: [, secondFeature],
      height: { foot }
    } = tim;

    expect(age).toEqual(FILL_ME_IN);
    expect(ageRange).toEqual(FILL_ME_IN);
    expect(secondFeature).toEqual(FILL_ME_IN);
    expect(foot).toEqual(FILL_ME_IN);
  })
});
