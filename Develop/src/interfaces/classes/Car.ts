import Motorbike from './Motorbike';
import Truck from './Truck';
import AbleToTow from './AbleToTow';
import Driveable from './Driveable';

interface Wheel {
  size: number;
  type: string; // e.g., "alloy", "steel"
}

export default class Car implements Driveable {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  maxSpeed: number;
  wheels: Wheel[];
  started: boolean = false; // Driveable property
  currentSpeed: number = 0; // Driveable property

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

  // Driveable methods
  start(): void {
      this.started = true;
      console.log(`${this.make} ${this.model} is starting.`);
  }

  accelerate(change: number): void {
      this.currentSpeed += change;
      if (this.currentSpeed > this.maxSpeed) {
          this.currentSpeed = this.maxSpeed; // Prevent exceeding max speed
      }
      console.log(`${this.make} ${this.model} accelerated to ${this.currentSpeed} km/h.`);
  }

  decelerate(change: number): void {
      this.currentSpeed -= change;
      if (this.currentSpeed < 0) {
          this.currentSpeed = 0; // Prevent negative speed
      }
      console.log(`${this.make} ${this.model} decelerated to ${this.currentSpeed} km/h.`);
  }

  stop(): void {
      this.currentSpeed = 0;
      this.started = false;
      console.log(`${this.make} ${this.model} has stopped.`);
  }

  turn(direction: string): void {
      console.log(`${this.make} ${this.model} turned ${direction}.`);
  }

  reverse(): void {
      console.log(`${this.make} ${this.model} is reversing.`);
  }
}