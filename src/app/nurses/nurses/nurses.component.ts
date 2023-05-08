import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

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
  total = 0;

  constructor(
    private http: HttpClient,
    private dataSerivce: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsersFromServer();
  }

  getUsersFromServer() {
    this.loadingStatus = 'loading';
    const resource = 'nurse-search';

    const userRequest = this.http.post(`${this.baseUrl}${resource}`, {
      sort_by: 'name-asc',
    });

    userRequest.subscribe(
      (resp: any) => {
        this.loadingStatus = 'done';
        this.usersList = resp.data;
        // console.log(this.usersList);
      },
      () => {
        this.loadingStatus = 'error';
      }
    );
  }

  sendNurseData(i: number) {
    // this.dataSerivce.setData(this.usersList[i])
    // const resource = `nurse/${i}`;
    // const nurseData = this.http.get(`${this.baseUrl}${resource}`);
    // nurseData.subscribe((resp: any) => {
    //   this.dataSerivce.setData(resp.data);
    // });
    this.router.navigateByUrl(`nurses/profile/${i}`)
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
      this.total += this.usersList[i].base_price;
      console.log(data.id);
    }
  }

  removeNurse(i: number) {
    this.total -= this.selectedNurses[i].base_price;
    this.selectedNurses.splice(i, 1);
  }

  selectAll(): void {
    this.selectedNurses = [];
    let sum = 0;
    for (let i = 0; i < this.usersList.length; i++) {
      this.selectedNurses[i] = this.usersList[i];
      sum += this.selectedNurses[i].base_price;
    }
    this.total = sum;
  }

  unselectAll() {
    this.selectedNurses = [];
    this.total = 0;
  }

  displaySchedule(i: number) {
    this.scheduleModal = true;
    this.nurseId = i;
  }
}

//data.name, data.total_experience, zsr_number, address, services[i].service.name_en, avg-rating
//prof screen: data.name, dob, k_number, zsr_number, sbk_number
//services[i].service.name_en, services[i].base_price, documents[i], schedules[i], customer_review

//schedule: start_time, end_time, status
//https://api.digital4nurse.ch/api/public/nurse/9
