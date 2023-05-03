import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesComponent } from './nurses/nurses.component';
import { ViewNursesComponent } from './view-nurses/view-nurses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NursesComponent,
    ViewNursesComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',
        component: NursesComponent 
      },
      {
        path:'view',
        component: ViewNursesComponent 
      },
    ])
  ],
})
export class NursesModule { }
