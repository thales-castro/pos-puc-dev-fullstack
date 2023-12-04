export class Car {
    _tank;
    _tankCapacity;

    constructor(tankCapacity) {
        this._tank = 0;
        this._tankCapacity = tankCapacity;
    }

    get tank() {
        return this._tank;
    }

    get capacity() {
        return this._tankCapacity;
    }

    set tank(qty) {
        if (qty >= 0) {
            if (qty + this._tank > this._tankCapacity)
                this._tank = this._tankCapacity;
            else
                this._tank += qty;
        }
    }
}