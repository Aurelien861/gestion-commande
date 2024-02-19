import {Component, EventEmitter, Output} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {SharedModule} from "primeng/api";
import {TooltipModule} from "primeng/tooltip";
import {regexValidator} from "../../../services/regexValidator.service";
import {InputNumberModule} from "primeng/inputnumber";
import {MaterialService} from "../../../services/material.service";
import {Material} from "../../../models/material.model";

@Component({
  selector: 'app-add-command',
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
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.scss'
})
export class AddOrderComponent { }
