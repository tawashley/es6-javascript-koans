describe("About Promises", function () {

  describe("Asynchronous Flow", function () {

    it("should understand Promise type", function () {

      function promise(number) {
        return new Promise(function(resolve, reject) {
            resolve();
        })
      }

      expect(promise() instanceof Promise).toEqual(FILL_ME_IN);
      expect(typeof promise()).toEqual(FILL_ME_IN);
    });

    it('should understand a Promise can be fulfilled / resolved', function(done) {

      function promiseResolved() {
        return new Promise(function(resolve, reject) {
          resolve('promise me this');
        });
      }

      promiseResolved()
        .then(function(promiseValue) {
          expect(promiseValue).toEqual(promiseValue);
        })
        .then(done)
    })

  });
});
