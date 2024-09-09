export default class Cli {
    constructor(vehicles) {
        this.vehicles = vehicles;
    }
    static generateVin() {
        return 'VIN' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }
    startCli() {
        console.log('CLI started with vehicles:', this.vehicles);
        // Implement CLI functionality here
        this.promptUser();
    }
    promptUser() {
        // Example of prompting the user for input (using Inquirer or similar)
        console.log('Choose an action:');
        // Implement user input handling for actions like creating a vehicle, selecting a vehicle, etc.
    }
}
