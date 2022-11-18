export class Circle {
    constructor(r) {
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

    circunference() {
        return 2 * Math.PI * this.radius;
    }
}