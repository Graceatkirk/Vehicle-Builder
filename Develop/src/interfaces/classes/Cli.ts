import Car from './Car';
import Motorbike from './Motorbike';
import Truck from './Truck';
import Wheel from './Wheel';

export default class Cli {
  vehicles: (Car | Motorbike | Truck)[];

  constructor(vehicles: (Car | Motorbike | Truck)[]) {
      this.vehicles = vehicles;
  }

  static generateVin(): string {
      return 'VIN' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  startCli(): void {
      console.log('CLI started with vehicles:', this.vehicles);
      // Implement CLI functionality here
      this.promptUser();
  }

  private promptUser(): void {
      // Example of prompting the user for input (using Inquirer or similar)
      console.log('Choose an action:');
      // Implement user input handling for actions like creating a vehicle, selecting a vehicle, etc.
  }

  // Additional methods for handling vehicle actions can be added here
}