import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html',
  styleUrls: ['./nurses.component.css'],
})
export class NursesComponent implements OnInit {
  baseUrl = 'https://api.digital4nurse.ch/api/public/';
  loadingStatus = '';
  usersList: any[] = [];
  selectedNurses: any[] = [];
  scheduleModal = false;
  nurseId = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getUsersFromServer() {
    this.loadingStatus = 'loading';
    const resource = 'nurse-search';

    const userRequest = this.http.post(`${this.baseUrl}${resource}`, {
      sort_by: 'name-asc',
    });

    userRequest.subscribe(
      (resp: any) => {
        this.loadingStatus = 'done';
        this.usersList  = resp.data;
      },
      () => {
        this.loadingStatus = 'error';
      }
    );
  }

  addNurses(i: number) {
    var data = this.usersList[i];
    let added = false;

    for (let j = 0; j < this.selectedNurses.length; j++) {
      if (data.id == this.selectedNurses[j].id) {
        alert('Nurse Already Added');
        added = true;
        break;
      }
    }

    if (added == false) {
      this.selectedNurses.push(data);
      console.log(data.id);
      
    }
  }

  removeNurse(i: number) {
    this.selectedNurses.splice(i, 1);
  }

  selectAll(){
    this.selectedNurses = []
    for(let i=0;i<this.usersList.length;i++){
      this.selectedNurses[i] = this.usersList[i]
    }
    
  }

  unselectAll(){
    this.selectedNurses = []
  }

  displaySchedule(i: number){
    this.scheduleModal = true; 
    this.nurseId=i
    console.log(this.nurseId);
    
  }
}

//data.name, data.total_experience, zsr_number, address, services[i].service.name_en, avg-rating
//prof screen: data.name, dob, k_number, zsr_number, sbk_number
//services[i].service.name_en, services[i].base_price, documents[i], schedules[i], customer_review


//schedule: start_time, end_time, status