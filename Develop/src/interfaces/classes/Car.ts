interface Wheel {
  size: number;
  type: string; // e.g., "alloy", "steel"
}

export default class Car {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  maxSpeed: number;
  wheels: Wheel[];

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, maxSpeed: number, wheels: Wheel[]) {
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.maxSpeed = maxSpeed;
      this.wheels = wheels; 
  }

  // Example method to display car details
  displayInfo(): string {
      return `Car Info: ${this.make} ${this.model} (${this.year}), VIN: ${this.vin}, Color: ${this.color}`;
  }

  // Example method to simulate starting the car
  start(): string {
      return `${this.make} ${this.model} is starting.`;
  }

  // Additional methods can be added as per requirements
}