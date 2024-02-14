import {Component, ViewChild} from '@angular/core';
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {InputTextModule} from "primeng/inputtext";
import { FormBuilder, Validators } from '@angular/forms';
import {regexValidator} from "../../services/regexValidator.service";



@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    PasswordModule,
    ButtonModule,
    TooltipModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {

  inscriptionForm = this.fb.group({
    firstName: ['', Validators.required, regexValidator(/^([A-Za-zéèàêâûôîùç\s-]{1,50})$/)],
    lastName: ['', Validators.required, regexValidator(/^([A-Za-zéèàêâûôîùç\s-]{1,50})$/)],
    email: ['', Validators.required, regexValidator(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)],
    address: this.fb.group({
      number: ['', Validators.required, regexValidator(/^\d{1,4}[A-Za-z]{0,3}$/)],
      street: ['', Validators.required, regexValidator(/^([A-Za-zéèàêâûôîùç\s-]{1,50})$/)],
      city: ['', Validators.required, regexValidator(/^([A-Za-zéèàêâûôîùç\s-]{1,50})$/)],
      cp: ['', Validators.required, regexValidator(/^\d{5}$/)]
    }),
    password: ['', Validators.required, [regexValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)]]
  });

  constructor(private fb: FormBuilder) { };

  submit(): boolean {
    return this.inscriptionForm && this.inscriptionForm.valid;
  }

  reset() {
    this.inscriptionForm.reset();
  }

}
