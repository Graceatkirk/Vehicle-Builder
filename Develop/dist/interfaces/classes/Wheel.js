export default class Wheel {
    constructor(size, brand) {
        this.size = size;
        this.brand = brand;
    }
    // Method to display wheel details
    displayInfo() {
        return `Wheel Info: Brand: ${this.brand}, Size: ${this.size} inches`;
    }
    // Example method to simulate checking the tire pressure (if applicable)
    checkPressure() {
        return `Checking pressure for ${this.brand} wheel of size ${this.size} inches.`;
    }
}
