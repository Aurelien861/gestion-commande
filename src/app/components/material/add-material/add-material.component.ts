import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {SharedModule} from "primeng/api";
import {TooltipModule} from "primeng/tooltip";
import {regexValidator} from "../../../services/regexValidator.service";
import {InputNumberModule} from "primeng/inputnumber";

@Component({
  selector: 'app-add-material',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    SharedModule,
    TooltipModule,
    InputNumberModule
  ],
  templateUrl: './add-material.component.html',
  styleUrl: './add-material.component.scss'
})
export class AddMaterialComponent {

  addMaterialForm = this.fb.group({
    serial: ['', Validators.required, regexValidator(/^([1-9]{3,50})$/)],
    brand: ['', Validators.required, regexValidator(/^([A-Za-zéèàêâûôîùç\s-]{1,50})$/)],
    model: ['', Validators.required, regexValidator(/^([A-Za-zéèàêâûôîùç\s-]{1,50})$/)],
    type: ['', Validators.required, regexValidator(/^([A-Za-zéèàêâûôîùç\s-]{1,50})$/)],
    price: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) { };

  submit(): boolean {
    return this.addMaterialForm && this.addMaterialForm.valid;
  }

  reset() {
    this.addMaterialForm.reset();
  }
}
