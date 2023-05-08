import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  nurseData: any;

  constructor() {}

  setData(data: any) {
    this.nurseData = data;
  }

  getData() {
    console.log('GET_NURSE_DATA: ', this.nurseData);
    return this.nurseData
  }
}
