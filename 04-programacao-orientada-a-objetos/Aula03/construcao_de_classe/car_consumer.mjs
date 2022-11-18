import { Car } from "./car_exp.mjs"

var car = new Car(55);
console.log(car.capacity);
console.log(car.tank);

car.tank = 30;
console.log(car.tank);

car.tank = 55;
console.log(car.tank);