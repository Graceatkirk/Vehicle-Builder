export default class Car {
    constructor(vin, color, make, model, year, weight, maxSpeed, wheels) {
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
    displayInfo() {
        return `Car Info: ${this.make} ${this.model} (${this.year}), VIN: ${this.vin}, Color: ${this.color}`;
    }
    // Example method to simulate starting the car
    start() {
        return `${this.make} ${this.model} is starting.`;
    }
}
