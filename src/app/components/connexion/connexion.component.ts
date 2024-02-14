import { Component } from '@angular/core';
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {regexValidator} from "../../services/regexValidator.service";

@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [
    PasswordModule,
    DividerModule,
    FormsModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {

  connexionForm = this.fb.group({
    email: ['aurelien.dufour257@gmail.com', Validators.required, regexValidator(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)],
    password: ['mdp', Validators.required]
  });

  constructor(private auth: AuthService,
              private router: Router,
              private fb: FormBuilder) {
  }

  onLogin() {
    if(this.connexionForm && this.connexionForm.valid) {
      this.auth.login();
      this.router.navigateByUrl('material-list');
    }
  }

  reset() {
    this.connexionForm.reset();
  }
}
