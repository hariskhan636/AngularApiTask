import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  nurseData: any;
  userId: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    let res: any = this.http.get(
      `https://api.digital4nurse.ch/api/public/nurse/${this.userId}`
    );
    res.subscribe({
      next: (res: any) => this.nurseData = res.data,
      error: () => alert('Error Encountered'),
    });
    console.log(this.nurseData);
    
  }
  
}
