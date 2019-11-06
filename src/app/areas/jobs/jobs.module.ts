import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: JobsComponent }
];

@NgModule({
  declarations: [JobsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JobsModule { }
