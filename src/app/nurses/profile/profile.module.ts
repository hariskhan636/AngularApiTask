import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    DatePipe,
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: ProfileComponent
      }
    ])
  ],
  providers: [DatePipe]
})
export class ProfileModule { }
