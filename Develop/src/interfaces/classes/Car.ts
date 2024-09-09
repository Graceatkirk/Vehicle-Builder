export default class Car {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  maxSpeed: number;
  wheels: any[]; 

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, maxSpeed: number, wheels: any[]) {
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.maxSpeed = maxSpeed;
      this.wheels = wheels; 
  }
}