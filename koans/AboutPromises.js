describe("About Promises", function () {

  describe("Asynchronous Flow", function () {

    it("should understand promise usage", function () {

      function isZero(number) {
        return new Promise(function(resolve, reject) {
          if(number === 0) {
            resolve();
          } else {
            reject(number + ' is not zero!');
          }
        })
      }

      expect(isZero(0) instanceof Promise).toEqual(FILL_ME_IN);
      expect(typeof isZero(0)).toEqual(FILL_ME_IN);
    });
  });
});
