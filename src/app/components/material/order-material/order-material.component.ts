import {Component, Input, OnInit} from '@angular/core';
import {Material} from "../../../models/material.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-order-material',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './order-material.component.html',
  styleUrl: './order-material.component.scss'
})
export class OrderMaterialComponent {

  @Input() products!: Material[];
  @Input() totalPrice!: number;

  submitOrder() {
    //TODO submit order
  }

}
