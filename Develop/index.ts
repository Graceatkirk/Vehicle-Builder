import inquirer from 'inquirer';
import Car from './src/classes/Car';
import Truck from './src/classes/Truck';
import Motorbike from './src/classes/Motorbike';

let vehicles: (Car | Truck | Motorbike)[] = [];

async function createVehicle() {
    const { vehicleType } = await inquirer.prompt([
        {
            type: 'list',
            name: 'vehicleType',
            message: 'Select the type of vehicle you want to create:',
            choices: ['Car', 'Truck', 'Motorbike'],
        },
    ]);

    const vehicleDetails = await inquirer.prompt([
        {
            type: 'input',
            name: 'make',
            message: 'Enter the make of the vehicle:',
        },
        {
            type: 'input',
            name: 'model',
            message: 'Enter the model of the vehicle:',
        },
        {
            type: 'input',
            name: 'year',
            message: 'Enter the year of the vehicle:',
        },
    ]);

    const vehicleConstructors: { [key: string]: typeof Car | typeof Truck | typeof Motorbike } = {
        Car: Car,
        Truck: Truck,
        Motorbike: Motorbike,
    };
    

    if (vehicleConstructors[vehicleType]) {
        const VehicleClass = vehicleConstructors[vehicleType];
        const newVehicle = new VehicleClass(
            vehicleDetails.make,
            vehicleDetails.model,
            vehicleDetails.year,
            vehicleDetails.vin,
            vehicleDetails.color,
            vehicleDetails.weight,
            vehicleDetails.maxSpeed,
            vehicleDetails.towingCapacity,
            vehicleDetails.wheels,
        );
        
        vehicles.push(newVehicle);
        console.log(`New ${vehicleType} created:`, newVehicle);
    } else {
        console.error('Invalid vehicle type:', vehicleType);
        return; 
    }
}

async function selectVehicle() {
    if (vehicles.length === 0) {
        console.log('No vehicles available. Please create a vehicle first.');
        return;
    }

    const { selectedVehicle } = await inquirer.prompt([
        {
            type: 'list',
            name: 'selectedVehicle',
            message: 'Select a vehicle:',
            choices: vehicles.map((vehicle, index) => `${index + 1}: ${vehicle.make} ${vehicle.model} (${vehicle.year})`),
        },
    ]);

    const vehicleIndex = parseInt(selectedVehicle.split(':')[0]) - 1;
    const vehicle = vehicles[vehicleIndex];
    console.log(`You selected:`, vehicle);
    
    if (vehicle instanceof Truck) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Choose an action:',
                choices: ['Tow Another Vehicle', 'Back'],
            },
        ]);

        if (action === 'Tow Another Vehicle') {
            await selectVehicle();
        }
    }

    if (vehicle instanceof Motorbike) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Choose an action:',
                choices: ['Wheelie', 'Back'],
            },
        ]);

        if (action === 'Wheelie') {
            console.log('Performing a wheelie...');
        }
    }

    if (vehicle instanceof Car) {
        console.log('Car actions are not available yet.');
    }
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
