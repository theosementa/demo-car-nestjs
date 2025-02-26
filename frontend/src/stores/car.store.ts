import { makeAutoObservable } from "mobx";
import { CarModel } from "../domain/models/car.model";
import { CarService } from "../services/car.service";

export class CarStore {
  static shared = new CarStore()

  constructor() {
    makeAutoObservable(this)
  }

  cars: CarModel[] = []

  async fetchAllCars() {
    this.cars = await CarService.fetchAll()
  }

  async addCLE53() {
    const newCLE = await CarService.createCLE53()
    this.cars.push(newCLE)
  }

  async addLamborghiniUrus() {
    const newUrus = await CarService.createURUS()
    this.cars.push(newUrus)
  }

  async addPurosangue() {
    const newPurosangue = await CarService.createPurosangue()
    this.cars.push(newPurosangue)
  }

  get carsByMakes() {
    return this.sortCarsByMake()
  }

  sortCarsByMake(): { [key: string]: CarModel[] } {
    return this.cars.reduce((acc, car) => {

      if (!acc[car.make]) {
        acc[car.make] = []
      }
      acc[car.make].push(car);
      return acc;
    }, {} as { [key: string]: CarModel[] });
  }

}