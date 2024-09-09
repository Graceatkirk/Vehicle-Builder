export default class Car {
    constructor(vin, color, make, model, year, weight, maxSpeed, wheels) {
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.maxSpeed = maxSpeed;
      this.wheels = wheels; // This could be an array of Wheel objects
    }
  }