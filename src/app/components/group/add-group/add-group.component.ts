import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {PasswordModule} from "primeng/password";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {SharedModule} from "primeng/api";
import {TooltipModule} from "primeng/tooltip";
import {regexValidator} from "../../../services/regexValidator.service";

@Component({
  selector: 'app-add-group',
  standalone: true,
    imports: [
        ButtonModule,
        InputTextModule,
        PaginatorModule,
        PasswordModule,
        ReactiveFormsModule,
        SharedModule,
        TooltipModule
    ],
  templateUrl: './add-group.component.html',
  styleUrl: './add-group.component.scss'
})
export class AddGroupComponent {

  addGroupForm = this.fb.group({
    name: ['', Validators.required, regexValidator(/^([A-Za-zéèàêâûôîùç\s-]{1,50})$/)],
    city: ['', Validators.required, regexValidator(/^([A-Za-zéèàêâûôîùç\s-]{1,50})$/)],
    cp: ['', Validators.required, [regexValidator(/^\d{5}$/)]]
  });

  constructor(private fb: FormBuilder) { };

  submit(): boolean {
    return this.addGroupForm && this.addGroupForm.valid;
  }

  reset() {
    this.addGroupForm.reset();
  }

}
