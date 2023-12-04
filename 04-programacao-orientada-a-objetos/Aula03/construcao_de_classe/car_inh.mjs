import { Car } from "./car_exp.mjs"

export class CarWithPlate extends Car {
    _plate;

    constructor(aPlate) {
        super(55);
        this._plate = aPlate;
    }

    get plate() {
        return this._plate;
    }
}