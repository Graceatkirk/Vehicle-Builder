interface Wheel {
  size: number;
  type: string; // e.g., "alloy", "steel"
}

export default class Truck {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  maxSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, maxSpeed: number, wheels: Wheel[], towingCapacity: number) {
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

  // Example method to display truck details
  displayInfo(): string {
      return `Truck Info: ${this.make} ${this.model} (${this.year}), VIN: ${this.vin}, Color: ${this.color}, Towing Capacity: ${this.towingCapacity} lbs`;
  }

  // Example method to simulate starting the truck
  start(): string {
      return `${this.make} ${this.model} is starting.`;
  }

  // Additional methods can be added as per requirements
}