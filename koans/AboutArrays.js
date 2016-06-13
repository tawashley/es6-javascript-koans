describe("About Arrays", function () {

  describe("New Prototype Methods", function () {

    it("should understand Array.of", function () {
      var zeroToTen = Array.of(0,1,2,3,4,5,6,7,8,9,10);

      // expect(zeroToTen[0]).toEqual(FILL_ME_IN);
      // expect(zeroToTen[5]).toEqual(FILL_ME_IN);
      // expect(zeroToTen[10]).toEqual(FILL_ME_IN);
    });

    it('should understand Array.from', function() {

    })

  });

  describe('New Instance Methods', function() {

    it('should understand array.find', function() {
      var primeNumbers = [2,3,5,7,11,13,17];

      var fifthPrimeInList = primeNumbers.find(function(element) {
          return element > 7;
      })

      // expect(fifthPrimeInList).toEqual(FILL_ME_IN);
    })

    it('should understand array.findIndex', function() {
      var primeNumbers = [2,3,5,7,11,13,17];

      var ThirteenIndex = primeNumbers.findIndex(function(element) {
          return element === 13;
      })

      // expect(ThirteenIndex).toEqual(FILL_ME_IN);
    })

    it('should understand array.fill', function() {
      var anArray = [1,2,3,4,5];

      anArray.fill('na');
      // expect(anArray.length).toEqual(FILL_ME_IN);

      anArray.push('BATMAN!');
      // expect(anArray.join(' ')).toEqual(FILL_ME_IN);

      var numbers = [1,2,3,4,5];
      numbers.fill(1, 3);

      // expect(numbers.join(',')).toEqual(FILL_ME_IN);

      var moreNumbers = [10,20,30,40,50];
      moreNumbers.fill(10, 2, 3);
      // expect(moreNumbers.join(',')).toEqual(FILL_ME_IN);

    })

    it('should understand array.copyWithin', function() {

      var letters = ['x', 'y', 'z', 'a'];
      letters.copyWithin(1);
      expect(letters.join(',')).toEqual('z,y,z,a');

      var moreLetters = ['a', 'b', 'c', 'd']
      moreLetters.copyWithin(1, 2);
      expect(moreLetters.join(',')).toEqual(FILL_ME_IN);

      var someMoreLetters = ['c', 'd', 'e', 'f', 'g'];
      someMoreLetters.copyWithin(1, 2, 4);
      expect(someMoreLetters.join(',')).toEqual(FILL_ME_IN);
    })

  })
});
