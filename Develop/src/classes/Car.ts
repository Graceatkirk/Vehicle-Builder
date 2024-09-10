class Car {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  maxSpeed: number;

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, maxSpeed: number) {
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.maxSpeed = maxSpeed;
  }

  displayInfo(): string {
      return `Car Info: ${this.make} ${this.model} (${this.year}), VIN: ${this.vin}, Color: ${this.color}`;
  }
}

export default Car;
//Step 4: Update the Main Application File
//index.ts

import inquirer from 'inquirer';
import Truck from './Truck';
import Motorbike from './Motorbike';

let vehicles: (Car | Truck | Motorbike)[] = [];

async function createVehicle() {
  // Add your implementation here
}

async function selectVehicle() {
  // Add your implementation here
}

async function main() {
  while (true) {
      const { action } = await inquirer.prompt([
          {
              type: 'list',
              name: 'action',
              message: 'Choose an action:',
              choices: ['Create New Vehicle', 'Select Existing Vehicle', 'Exit'],
          },
      ]);

      if (action === 'Create New Vehicle') {
          await createVehicle();
      } else if (action === 'Select Existing Vehicle') {
          await selectVehicle();
      } else {
          console.log('Exiting...');
          break;
      }
  }
}
