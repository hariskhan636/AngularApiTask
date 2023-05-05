import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesComponent } from './nurses/nurses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    NursesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',
        component: NursesComponent 
      },
      {
        path:'profile',
        loadChildren: () => import('./profile/profile.module')
        .then(mod => mod.ProfileModule)
      }
    ])
  ],
  providers:[DataService]
})
export class NursesModule { }
