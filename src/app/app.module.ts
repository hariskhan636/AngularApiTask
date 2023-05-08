import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { NursesModule } from './nurses/nurses.module';
import { ProfileModule } from './nurses/profile/profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NursesModule,
    ProfileModule,
    RouterModule.forRoot([
      {
        path: 'nurses',
        loadChildren: () =>
          import('./nurses/nurses.module').then((mod) => mod.NursesModule),
      },
    ]),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
