import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersHelperService } from 'src/app/shared/services/non-apis/orders-helper.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit, OnDestroy {

  orderNumber: string;
  subscription: Subscription;

  constructor(private orderHelper: OrdersHelperService,
              private router: Router) {
   }

  ngOnInit() {
    this.subscription = this.orderHelper.getNumber().subscribe(x =>  {
      this.orderNumber = x.orderNumber;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigate(){
    const url = 'areas/jobs?orderNo=${this.orderNumber}';
    this.router.navigate([`areas/jobs`],{ queryParams: { orderNo: this.orderNumber } });
  }
}
