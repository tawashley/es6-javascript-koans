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

    it('should understand startsWith function', function() {
      var string = 'Tower Bridge';

      expect(string.startsWith('Tow')).toEqual(FILL_ME_IN);
      expect(string.startsWith('rid')).toEqual(FILL_ME_IN);
      expect(string.startsWith('Bridge', 6)).toEqual(FILL_ME_IN);
      expect(string.startsWith('bridge', 6)).toEqual(FILL_ME_IN);
    })

    it('should understand endsWith function', function() {
      var string = 'Tower Bridge';

      expect(string.endsWith('Tow')).toEqual(FILL_ME_IN);
      expect(string.endsWith('Bridge')).toEqual(FILL_ME_IN);
      expect(string.endsWith('Tower', 5)).toEqual(FILL_ME_IN);
      expect(string.endsWith('tower', 5)).toEqual(FILL_ME_IN);
    })

    it('should understand includes function', function() {
      var string = 'Tower Bridge';

      expect(string.includes('Tow')).toEqual(FILL_ME_IN);
      expect(string.includes('rid')).toEqual(FILL_ME_IN);
      expect(string.includes('bridge')).toEqual(FILL_ME_IN);
      expect(string.includes('Tower', 5)).toEqual(FILL_ME_IN);
    })

    it('should understand repeat function', function() {
      var ga = ' ga';
      var goo =' goo';

      var lineOne = 'All we hear is Radio' + ga.repeat(2);
      var lineTwo = 'Radio' + goo.repeat(2);

      expect(lineOne).toEqual(FILL_ME_IN);
      expect(lineTwo).toEqual(FILL_ME_IN);
    })
  })
});
