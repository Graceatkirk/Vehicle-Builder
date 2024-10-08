import Wheel from './Wheel';

class Car {
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    maxSpeed: number;
    wheels: Wheel[];

    constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, maxSpeed: number, wheels: Wheel[]) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.wheels = wheels;
    }

    displayInfo(): string {
        return `Car Info: ${this.make} ${this.model} (${this.year}), VIN: ${this.vin}, Color: ${this.color}`;
    }
}

export default Car;