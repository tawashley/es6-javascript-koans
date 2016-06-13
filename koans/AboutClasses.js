describe("About Classes", function () {

  describe("Basic Declaration", function () {

    it("should understand base usage", function () {

      //Sugar Syntax for car.prototype
      class Car {
          constructor(make, model) {
            this.make = make;
            this.model = model;
          }

          getFullName() {
            return this.make + ' ' + this.model;
          }
      }

      let car = new Car('Ford', 'Mustang');

      expect(car instanceof Car).toEqual(FILL_ME_IN);
      expect(car instanceof Object).toEqual(FILL_ME_IN);

      expect(typeof car.getFullName).toEqual(FILL_ME_IN);
      expect(car.getFullName()).toEqual(FILL_ME_IN);

      let Bike = class {
        constructor(make, model) {
          this.make = make;
          this.model = model;
        }

        getFullName() {
          return this.make + ' ' + this.model;
        }
      }

      let bike = new Bike('Ducati', 'Monster');

      expect(typeof bike.getFullName).toEqual(FILL_ME_IN);
      expect(bike.getFullName()).toEqual(FILL_ME_IN);

    });
  });
});
