import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    nurseData: any

constructor() { }

setData(data:any){
    this.nurseData = data
}

getData(){
    return this.nurseData
}

}



