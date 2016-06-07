describe("About Strings", function () {

  describe("Template Literals", function () {

    it("should understand variable substitution", function () {
      var spoiler = 'father';
      var templateVariable = `No. I am your ${spoiler}`;

      expect(templateVariable).toEqual(FILL_ME_IN);
    });

    it("should understand function substitution", function() {
      function typeOfSituation(goodOrBad) {
        if(goodOrBad === 'bad') {
          return 'trap!';
        }

        return 'good day!'
      }

      var templateFunction = `It's a ${typeOfSituation('bad')}`

      expect(templateFunction).toEqual(FILL_ME_IN);
    })

    it('should understand template expressions', function() {
      var wrongParsecs = 10;
      var templateExpression = `...Kessel Run in ${wrongParsecs + 2} parsecs? ${wrongParsecs + 4}!`;

      expect(templateExpression).toEqual(FILL_ME_IN);
    })
  });

  describe("New String Methods", function() {
    //.startsWith
    //.endsWith
    //.includes
    //.repeat
  })
});
