describe("About Maps", function () {

  describe("Basic Usage", function () {

    beforeEach(function () {});
    afterEach(function () {});
    before(function () {});
    after(function () {});

    it("should they are key, value stores", function () {
      var person = new Map();
      trooper.set('name', 'Stormtrooper');
      trooper.set('Droid you are looking for?', false);
      trooper.set('hits target', function() {
        return false;
      })

      expect(trooper.size).toBe(FILL_ME_IN);
    });
  });
});
