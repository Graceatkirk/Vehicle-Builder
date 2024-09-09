export default class Motorbike {
  vin: string; // Assuming vin is a string
  color: string; // Assuming color is a string
  make: string; // Assuming make is a string
  model: string; // Assuming model is a string
  year: number; // Assuming year is a number
  weight: number; // Assuming weight is a number
  maxSpeed: number; // Assuming maxSpeed is a number
  wheels: any[]; // You can replace 'any' with a specific type if you have a Wheel class or interface

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, maxSpeed: number, wheels: any[]) {
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