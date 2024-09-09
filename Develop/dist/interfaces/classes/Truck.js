export default class Truck {
    constructor(vin, color, make, model, year, weight, maxSpeed, wheels, towingCapacity) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.wheels = wheels;
        this.towingCapacity = towingCapacity;
    }
    // Example method to display truck details
    displayInfo() {
        return `Truck Info: ${this.make} ${this.model} (${this.year}), VIN: ${this.vin}, Color: ${this.color}, Towing Capacity: ${this.towingCapacity} lbs`;
    }
    // Example method to simulate starting the truck
    start() {
        return `${this.make} ${this.model} is starting.`;
    }
}
