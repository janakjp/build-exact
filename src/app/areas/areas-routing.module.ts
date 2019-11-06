import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:  'jobs', loadChildren: () => import('src/app/areas/jobs/jobs.module').then(m => m.JobsModule)},
  {path:  'orders', loadChildren: () => import('src/app/areas/orders/orders.module').then(m => m.OrdersModule)},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule { }
