import {Group} from "../models/group.model";
import {Injectable} from "@angular/core";
@Injectable({ providedIn: 'root' })
export class GroupService {
  getGroupsData(): Group[] {
    return [
      {
        id: '1',
        number: 'G1',
        name: 'Informatique',
        city: 'Valenciennes',
        cp: 59300,
        memberIds: ['1000', '1001', '1002', '1003']
      },
      {
        id: '2',
        number: 'G2',
        name: 'Electrique',
        city: 'Paris',
        cp: 75000,
        memberIds: ['1004', '1005']
      },
      {
        id: '3',
        number: 'G3',
        name: 'Vroumvroum',
        city: 'Valenciennes',
        cp: 59300,
        memberIds: ['1006']
      },
      {
        id: '4',
        number: 'G4',
        name: 'ouaisouaisouais',
        city: 'Caen',
        cp: 14000,
        memberIds: ['1008', '1007']
      },
      {
        id: '5',
        number: 'G5',
        name: 'groupe 5',
        city: 'Lille',
        cp: 59000,
        memberIds: ['1009']
      },
      {
        id: '6',
        number: 'G6',
        name: 'Electronique 2',
        city: 'Valenciennes',
        cp: 59300,
        memberIds: ['1010']
      },
    ];
  }
  getGroupsDataPromise(): Promise<Group[]> {
    return Promise.resolve(this.getGroupsData().slice(0, 200));
  }
};
