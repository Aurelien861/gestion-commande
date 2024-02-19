import {Component, Input} from '@angular/core';
import {Order} from "../../../models/order.model";

@Component({
  selector: 'app-edit-order',
  standalone: true,
  imports: [],
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.scss'
})
export class EditOrderComponent {

  @Input() order: Order | undefined;
}
