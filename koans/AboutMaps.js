describe("About Maps", function () {

  describe("Basic Usage", function () {

    it("should understand they are key, value stores", function () {
      var trooper = new Map();

      trooper.set('name', 'Stormtrooper');
      trooper.set('Droid you are looking for?', false);
      trooper.set('hits target', function() {
        return false;
      })

      expect(trooper.size).toEqual(FILL_ME_IN);
      expect(trooper.get('name')).toEqual(FILL_ME_IN);
      expect(trooper.get('hits target')()).toEqual(FILL_ME_IN);
    });

    it("should understand they are mutable values", function() {
      var trooper = new Map();

      trooper.set('name', 'Stormtrooper');
      expect(trooper.get('name')).toEqual(FILL_ME_IN);

      trooper.set('name', 'Iron Maiden');
      expect(trooper.get('name')).toEqual(FILL_ME_IN);
    })

    it("should understand they can contain any value", function() {
      var values = new Map();

      values.set('string', 'this is a string');
      values.set('array', ['a', 'b', 'c']);
      values.set('object', { a: 1, b: 2 });
      values.set('function', function(number) { return number * 2 });

      expect(values.get(FILL_ME_IN)).toEqual('this is a string');
      expect(values.get('array')).toEqual(FILL_ME_IN);

      expect(values.get(FILL_ME_IN)).toEqual('');
      expect(typeof values.get('object')).toEqual(FILL_ME_IN);

      expect(values.get(FILL_ME_IN)).toEqual('');
      expect(typeof values.get('function')).toEqual(FILL_ME_IN);
      expect(values.get(FILL_ME_IN)).toEqual(12);
    })

    it("should understand can check if entries exist", function() {
      var colours = new Map();

      colours.set('red', '#f00');
      colours.set('yellow', '#ff0');

      expect(colours.has('red')).toEqual(FILL_ME_IN);
      expect(colours.has('green')).toEqual(FILL_ME_IN);
    })

    it("should understand entries can be removed", function() {
      var carDetails = new Map();

      carDetails.set('make', 'McLaren');
      carDetails.set('engine', 'Honda');
      carDetails.set('doors', 4);

      expect(carDetails.size).toEqual(FILL_ME_IN);

      carDetails.delete('doors');

      expect(carDetails.size).toEqual(FILL_ME_IN);
      expect(carDetails.has('doors')).toEqual(FILL_ME_IN);
    })

    //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/typeof
    it("should understand typeof returns object", function() {
      var map = new Map();

      expect(typeof map).toEqual(FILL_ME_IN);
    })

  });

  // describe("Methods", function() {
  //
  //   it("should understand the 'entries' method", function() {
  //
  //   })
  //
  //   it("should understand 'forEach' method", function() {
  //
  //   })
  //
  //
  //   it("should understand 'keys' method", function() {
  //
  //   })
  //
  // })

});
