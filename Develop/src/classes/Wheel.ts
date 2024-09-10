class Wheel {
    size: number;
    type: string; // e.g., "alloy", "steel"

    constructor(size: number, type: string) {
        this.size = size;
        this.type = type;
    }

    displayInfo(): string {
        return `Wheel Info: Brand: ${this.type}, Size: ${this.size} inches`;
    }
}

export default Wheel;