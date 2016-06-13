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

  describe('Classes as First-Class Citizens', function() {

    it('should understand passing classes around', function() {

      function constructCarClass(classObj, make, model) {
        return new classObj(make, model);
      }

      var car = constructCarClass(class {
          constructor(make, model) {
            this.make = make;
            this.model = model;
          }

          getFullName() {
            return this.make + ' ' + this.model;
          }
      }, 'Ford', 'Mustang');

      expect(car.getFullName()).toEqual(FILL_ME_IN);
    })
  })

  describe('Getters and Setters', function() {

    it('should understand syntax for getters and setters', function() {
      class Car {
          constructor() {
            this._make = undefined;
          }

          get make() {
            if(typeof this._make === 'undefined') {
              return 'No car set';
            }

            return this._make;
          }
          set make(newMake) {
              this._make = newMake;
          }
      }

      var car = new Car();

      expect(car.make).toEqual(FILL_ME_IN);

      car.make = 'Ford';
      expect(car.make).toEqual(FILL_ME_IN);

      car.make = 'Bugatti';
      expect(car.make).toEqual(FILL_ME_IN);
    })
  })

  describe('Static Methods', function() {
    it('should understand syntax for static methods', function() {

      class Car {

        static getNumberOfWheels() {
          return 4
        }
      }

      expect(typeof Car.getNumberOfWheels).toEqual(FILL_ME_IN);
      expect(Car.getNumberOfWheels()).toEqual(FILL_ME_IN);
    })
  })

  describe('Inheritence', function() {

    it('should understand usage of super() function', function() {
      class Car {
          constructor(make, model) {
            this.make = make;
            this.model = model;
          }

          getFullName() {
            return this.make + ' ' + this.model;
          }
      }

      class SuperCar extends Car {
        constructor(make, model) {
          super(make, model);
        }
      }

      var superCar = new SuperCar('McLaren', 'P1');

      expect(superCar.getFullName()).toEqual(FILL_ME_IN);
    })

    it('should understand overriding/shadowing inherited properties', function() {
      class Car {
          constructor(make, model) {
            this.make = make;
            this.model = model;
          }

          getFullName() {
            return this.make + ' ' + this.model;
          }

          static hasSlickTyres() {
            return false;
          }

          static canFly() {
            return false;
          }
      }

      class SuperCar extends Car {
        constructor(make, model) {
          super(make, model);
        }

        getFullName() {
          var name = super.getFullName();

          return 'Car Name: ' + name;
        }

        static hasSlickTyres() {
          return true;
        }
      }

      expect(SuperCar.hasSlickTyres()).toEqual(FILL_ME_IN);
      expect(SuperCar.canFly()).toEqual(FILL_ME_IN);

      var superCar = new SuperCar('McLaren', 'P1');

      expect(superCar.getFullName()).toEqual(FILL_ME_IN);
    })
  })

});
