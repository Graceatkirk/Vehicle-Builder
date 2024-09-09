export default class Cli {
  vehicles: any[]; // You can replace 'any' with a specific type if you have a Vehicle class or interface

  constructor(vehicles: any[]) {
      this.vehicles = vehicles;
  }

  static generateVin(): string {
      return 'VIN' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  startCli(): void {
      console.log('CLI started with vehicles:', this.vehicles);
      // Implement CLI functionality here
  }
}