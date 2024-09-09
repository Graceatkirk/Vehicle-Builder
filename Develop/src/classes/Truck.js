export default class Truck {
    constructor(vin, color, make, model, year: number, weight, maxSpeed, wheels, towingCapacity) {
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.maxSpeed = maxSpeed;
      this.wheels = wheels;
      this.towingCapacity = towingCapacity;
    }
  }