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
    }
  }