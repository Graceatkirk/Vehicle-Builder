import Driveable from "./Driveable";
import AbleToTow from "./AbleToTow";
import Wheel from "./Wheel";
import Car from "./Car";
import Motorbike from "./Motorbike";

class Truck implements AbleToTow, Driveable {
    towingCapacity: number;
    started: boolean = false;
    currentSpeed: number = 0;

    constructor(
        public vin: string,
        public color: string,
        public make: string,
        public model: string,
        public year: number,
        public weight: number,
        public maxSpeed: number,
        public wheels: Wheel[],
        towingCapacity: number
    ) {
        this.towingCapacity = towingCapacity;
    }

    tow(vehicle: Truck | Motorbike | Car): void {
        console.log(`Towing ${vehicle.make} ${vehicle.model}`);
    }

    start(): void {
        this.started = true;
        console.log(`${this.make} ${this.model} started.`);
    }

    accelerate(change: number): void {
        this.currentSpeed += change;
        console.log(`${this.make} ${this.model} accelerated to ${this.currentSpeed} km/h.`);
    }

    decelerate(change: number): void {
        this.currentSpeed -= change;
        console.log(`${this.make} ${this.model} decelerated to ${this.currentSpeed} km/h.`);
    }

    stop(): void {
        this.currentSpeed = 0;
        this.started = false;
        console.log(`${this.make} ${this.model} stopped.`);
    }

    turn(direction: string): void {
        console.log(`${this.make} ${this.model} turned ${direction}.`);
    }

    reverse(): void {
        console.log(`${this.make} ${this.model} is reversing.`);
    }
}

export default Truck;