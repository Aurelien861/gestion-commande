import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MemberService {
  getMembersData() {
    return [
      {
        id: '1000',
        name: 'f230fh0g3',
        firstname: 'Aurélien Watch',
        address: {
          number: 27,
          street: 'rue Jean Jaurès',
          city: 'Anzin',
          cp: 59410
        },
        email: 'a'
      },
      {
        id: '1001',
        name: 'f230fh0g3',
        firstname: 'Eloise Watch',
        address: {
          number: 29,
          street: 'rue Jean Jaurès',
          city: 'Valenciennes',
          cp: 59410
        },
        email: 'b'
      },
      {
        id: '1002',
        name: 'f230fh0g3',
        firstname: 'Mathéo Watch',
        address: {
          number: 28,
          street: 'rue Jean Jaurès',
          city: 'Lille',
          cp: 59410
        },
        email: 'z'
      },
      {
        id: '1003',
        name: 'Dufour',
        firstname: 'Bamboo Watch',
        address: {
          number: 29,
          street: 'rue Jean Jaurès',
          city: 'Caen',
          cp: 59410
        },
        email: 'bamboo-watch.jpg'
      },
      {
        id: '1004',
        name: 'f230fh0g3',
        firstname: 'Bamboo Watch',
        address: {
          number: 29,
          street: 'rue Jean Jaurès',
          city: 'Anzin',
          cp: 59410
        },
        email: 'bamboo-watch.jpg'
      },
      {
        id: '1005',
        name: 'f230fh0g3',
        firstname: 'Bamboo Watch',
        address: {
          number: 29,
          street: 'rue Jean Jaurès',
          city: 'Anzin',
          cp: 59410
        },
        email: 'bamboo-watch.jpg'
      },
      {
        id: '1006',
        name: 'f230fh0g3',
        firstname: 'Bamboo Watch',
        address: {
          number: 29,
          street: 'rue Jean Jaurès',
          city: 'Anzin',
          cp: 59410
        },
        email: 'bamboo-watch.jpg'
      },
      {
        id: '1007',
        name: 'f230fh0g3',
        firstname: 'Bamboo Watch',
        address: {
          number: 29,
          street: 'rue Jean Jaurès',
          city: 'Anzin',
          cp: 59410
        },
        email: 'bamboo-watch.jpg'
      },
      {
        id: '1008',
        name: 'f230fh0g3',
        firstname: 'Bamboo Watch',
        address: {
          number: 29,
          street: 'rue Jean Jaurès',
          city: 'Anzin',
          cp: 59410
        },
        email: 'bamboo-watch.jpg'
      },
      {
        id: '1009',
        name: 'f230fh0g3',
        firstname: 'Bamboo Watch',
        address: {
          number: 29,
          street: 'rue Jean Jaurès',
          city: 'Anzin',
          cp: 59410
        },
        email: 'bamboo-watch.jpg'
      },
      {
        id: '1010',
        name: 'f230fh0g3',
        firstname: 'Bamboo Watch',
        address: {
          number: 29,
          street: 'rue Jean Jaurès',
          city: 'Anzin',
          cp: 59410
        },
        email: 'bamboo-watch.jpg'
      }
    ];
  }
  getMembersDataPromise() {
    return Promise.resolve(this.getMembersData().slice(0, 200));
  }
};
