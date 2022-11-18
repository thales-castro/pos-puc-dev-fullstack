import { CarWithPlate } from "./car_inh.mjs";

export class RenACar {
    _cars;

    constructor() {
        this._cars = [];
    }

    addACar(aCar) {
        this._cars.push(aCar);
        console.log(this._cars.length);
    }

    getCars() {
        this._cars.forEach(
            (car) => console.log(
                "car plate (" +
                car.plate + "); tank: " +
                car.tank));
    }

    fullfillCar(idx, qty) {
        if (index >= 0 && index < this._cars.length)
            this._cars[idx].tank = qty;
    }
}