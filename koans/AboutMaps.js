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

  });
});
