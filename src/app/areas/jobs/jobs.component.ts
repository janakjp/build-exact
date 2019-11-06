import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit , OnDestroy{

  orderNo: string;
  subscription: Subscription;
  
  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // get id from url
    this.subscription = this.activatedRoute.queryParams.subscribe(params => {
      this.orderNo = params['orderNo'];
      console.log(this.orderNo);
      
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
