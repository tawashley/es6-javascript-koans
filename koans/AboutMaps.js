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

  });
});
