import {Component, Input} from '@angular/core';
import {Order} from "../../../models/order.model";

@Component({
  selector: 'app-remove-order',
  standalone: true,
  imports: [],
  templateUrl: './remove-order.component.html',
  styleUrl: './remove-order.component.scss'
})
export class RemoveOrderComponent {

  @Input() order: Order | undefined;
}
