import Wheel from './Wheel';
import Motorbike from './Motorbike';
import Car from './Car';

class Truck {
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    maxSpeed: number;
    towingCapacity: number;
    wheels: Wheel[];

    constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, maxSpeed: number, towingCapacity: number, wheels: Wheel[]) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.towingCapacity = towingCapacity;
        this.wheels = wheels;
    }

    displayInfo(): string {
        return `Truck Info: ${this.make} ${this.model} (${this.year}), VIN: ${this.vin}, Color: ${this.color}, Towing Capacity: ${this.towingCapacity} kg`;
    }

    tow(vehicle: Truck | Motorbike | Car): void {
        console.log(`Towing ${vehicle.make} ${vehicle.model}`);
    }
}

export default Truck;