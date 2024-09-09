export default class Wheel {
  size: number;
  brand: string;

  constructor(size: number, brand: string) {
      this.size = size;
      this.brand = brand;
  }

  // Method to display wheel details
  displayInfo(): string {
      return `Wheel Info: Brand: ${this.brand}, Size: ${this.size} inches`;
  }

  // Example method to simulate checking the tire pressure (if applicable)
  checkPressure(): string {
      return `Checking pressure for ${this.brand} wheel of size ${this.size} inches.`;
  }

  // Additional methods can be added as per requirements
}