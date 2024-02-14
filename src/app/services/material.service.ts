import {Material} from "../models/material.model";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })

export class MaterialService {
  getMaterialsData(): Material[] {
    return [
      {
        id: '1',
        serial: '12345',
        brand: 'Apple',
        model: 'Mac M1',
        type: 'Laptop',
        price: 2300,
        groupId: '1'
      },
      {
        id: '2',
        serial: '16478',
        brand: 'Lenovo',
        model: 'Yoga P9',
        type: 'Laptop',
        price: 1300,
        groupId: '1'
      },
      {
        id: '3',
        serial: '56476',
        brand: 'Intel',
        model: 'i7 13e gen',
        type: 'Processor',
        price: 450,
        groupId: '1'
      },
      {
        id: '4',
        serial: '675789987',
        brand: 'Dell',
        model: 'Power +',
        type: 'Laptop',
        price: 850,
        groupId: '1'
      },
      {
        id: '5',
        serial: '17865',
        brand: 'Asus',
        model: 'Zenbook',
        type: 'Laptop',
        price: 2000,
        groupId: '1'
      },
      {
        id: '6',
        serial: '34537',
        brand: 'Samsung',
        model: 'Book air',
        type: 'Laptop',
        price: 1800,
        groupId: '1'
      },
      {
        id: '7',
        serial: '986875',
        brand: 'Apple',
        model: 'Mac M2',
        type: 'Laptop',
        price: 2500,
        groupId: '1'
      },
      {
        id: '8',
        serial: '564567',
        brand: 'AMD',
        model: 'Rizen 5',
        type: 'Processor',
        price: 250,
        groupId: '1'
      },
      {
        id: '9',
        serial: '9986106',
        brand: 'Electronix',
        model: 'Elec',
        type: 'Cable haute tension',
        price: 43,
        groupId: '2'
      },
    ];
  }
  getMaterialsDataPromise(): Promise<Material[]> {
    return Promise.resolve(this.getMaterialsData().slice(0, 200));
  }
};
