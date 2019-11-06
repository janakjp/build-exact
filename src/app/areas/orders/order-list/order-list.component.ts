import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrdersHelperService } from 'src/app/shared/services/non-apis/orders-helper.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderListFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private orderHelper: OrdersHelperService) { }

  ngOnInit() {
    this.createForm();


  }

  private createForm(): void {
    this.orderListFormGroup = this.formBuilder.group({
      orderNumber: ['']
    });
  }


  detailClick() {
    // this.orderHelper.updateOrderNo('1234');
    const oNo = this.orderListFormGroup.controls.orderNumber.value;
    
    this.orderHelper.sendNumber(oNo);
  }

}
