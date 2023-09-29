export default class Car {
  constructor (brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static clone (car) {
    return new car.constructor(car._brand, car._motor, car._color);
  }
}
