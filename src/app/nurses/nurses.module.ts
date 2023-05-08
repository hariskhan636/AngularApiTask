import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NursesComponent } from './nurses/nurses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [NursesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: NursesComponent,
      },
      // {
      //   path: 'profile/:id',
      //   loadChildren: () =>
      //     import('./profile/profile.module').then((mod) => mod.ProfileModule),
      // },
      {
        path: 'profile/:id',
        component: ProfileComponent,
      },
    ]),
  ],
  providers: [DataService],
})
export class NursesModule {}
