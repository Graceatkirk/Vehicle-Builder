// Import classes and interfaces
import * as inquirer from "inquirer";
import Truck from "./classes/Truck";
import Car from "./classes/Car";
import Motorbike from "./classes/Motorbike";
import Wheel from "./classes/Wheel";
import Cli from "./classes/Cli";
import AbleToTow from "./AbleToTow";
import Driveable from "./Drivable";

// Create an array of vehicles
const vehicles: (Car | Motorbike | Truck)[] = [];

// Function to create a new vehicle
async function createVehicle() {
  const { vehicleType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'vehicleType',
      message: 'Which type of vehicle would you like to create?',
      choices: ['Car', 'Truck', 'Motorbike'],
    },
  ]);

  const commonQuestions = [
    {
      type: 'input',
      name: 'color',
      message: 'What is the color of the vehicle?',
    },
    {
      type: 'input',
      name: 'make',
      message: 'What is the make of the vehicle?',
    },
    {
      type: 'input',
      name: 'model',
      message: 'What is the model of the vehicle?',
    },
    {
      type: 'input',
      name: 'year',
      message: 'What is the year of the vehicle?',
      validate: (input: string) => !isNaN(Number(input)) || 'Please enter a valid year.',
    },
    {
      type: 'input',
      name: 'weight',
      message: 'What is the weight of the vehicle?',
      validate: (input: string) => !isNaN(Number(input)) || 'Please enter a valid weight.',
    },
    {
      type: 'input',
      name: 'maxSpeed',
      message: 'What is the maximum speed of the vehicle?',
      validate: (input: string) => !isNaN(Number(input)) || 'Please enter a valid maximum speed.',
    },
  ];

  const commonAnswers = await inquirer.prompt(commonQuestions);

  // Create the vehicle based on the type
  let newVehicle: Car | Motorbike | Truck | undefined;
  switch (vehicleType) {
    case 'Car':
      newVehicle = new Car(
        Cli.generateVin(),
        commonAnswers.color,
        commonAnswers.make,
        commonAnswers.model,
        Number(commonAnswers.year),
        Number(commonAnswers.weight),
        Number(commonAnswers.maxSpeed),
        []
      );
      break;
    case 'Truck':
      newVehicle = new Truck(
        Cli.generateVin(),
        commonAnswers.color,
        commonAnswers.make,
        commonAnswers.model,
        Number(commonAnswers.year),
        Number(commonAnswers.weight),
        Number(commonAnswers.maxSpeed),
        [],
        10000 // Example towing capacity
      );
      break;
    case 'Motorbike':
      const motorbikeWheels: Wheel[] = [
        new Wheel(17, "Michelin"),
        new Wheel(17, "Michelin"),
      ];
      newVehicle = new Motorbike(
        Cli.generateVin(),
        commonAnswers.color,
        commonAnswers.make,
        commonAnswers.model,
        Number(commonAnswers.year),
        Number(commonAnswers.weight),
        Number(commonAnswers.maxSpeed),
        motorbikeWheels
      );
      break;
    default:
      break;
  }

  // Push the new vehicle to the array
  if (newVehicle) {
    vehicles.push(newVehicle);
  }
  console.log(`${vehicleType} created successfully!`);
}

// Function to select an existing vehicle
async function selectVehicle() {
  if (vehicles.length === 0) {
    console.log("No vehicles available. Please create a vehicle first.");
    return null;
  }

  const { selectedVehicle } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedVehicle',
      message: 'Select a vehicle to use:',
      choices: vehicles.map((vehicle, index) => ({
        name: `${vehicle.make} ${vehicle.model} (${vehicle.year})`,
        value: index,
      })),
    },
  ]);

  return vehicles[selectedVehicle];
}

// Function to perform actions with a vehicle
async function performAction(vehicle: Car | Motorbike | Truck) {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: `What would you like to do with your ${vehicle.make} ${vehicle.model}?`,
      choices: ['Start', 'Display Info', 'Tow a Vehicle', 'Back'],
    },
  ]);

  switch (action) {
    case 'Start':
      if ('start' in vehicle) {
        vehicle.start(); // Call the start method from the Driveable interface
      } else {
        console.log(`${vehicle.make} ${vehicle.model} cannot be started.`);
      }
      break;
    case 'Display Info':
      console.log(`Vehicle Info: ${JSON.stringify(vehicle, null, 2)}`);
      break;
    case 'Tow a Vehicle':
      if ('tow' in vehicle) {
        const vehicleToTow = await selectVehicle();
        if (vehicleToTow) {
          vehicle.tow(vehicleToTow); // Call the tow method from the AbleToTow interface
        }
      } else {
        console.log(`${vehicle.make} ${vehicle.model} cannot tow.`);
      }
      break;
    case 'Back':
      console.log("Returning to the main menu.");
      return; // Exit the action menu
  }
}

// Function to start the CLI
async function startCli() {
  let running = true;

  while (running) {
    const { mainAction } = await inquirer.prompt([
      {
        type: 'list',
        name: 'mainAction',
        message: 'What would you like to do?',
        choices: ['Create Vehicle', 'Select Existing Vehicle', 'Exit'],
      },
    ]);

    switch (mainAction) {
      case 'Create Vehicle':
        await createVehicle();
        break;
      case 'Select Existing Vehicle':
        const selectedVehicle = await selectVehicle();
        if (selectedVehicle) {
          await performAction(selectedVehicle);
        }
        break;
      case 'Exit':
        running = false;
        console.log("Exiting the application. Goodbye!");
        break;
    }
  }
}

// Start the CLI
startCli();