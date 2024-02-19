import {Component, OnInit, ViewChild} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {PasswordModule} from "primeng/password";
import {ReactiveFormsModule} from "@angular/forms";
import {InscriptionFormComponent} from "../inscription-form/inscription-form.component";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {Member} from "../../../models/member.model";

@Component({
  selector: 'app-inscription-page',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    PaginatorModule,
    PasswordModule,
    ReactiveFormsModule,
    InscriptionFormComponent
  ],
  templateUrl: './inscription-page.component.html',
  styleUrl: './inscription-page.component.scss'
})
export class InscriptionPageComponent{

  @ViewChild('inscriptionForm', {read: InscriptionFormComponent}) inscriptionForm?: InscriptionFormComponent;

  constructor(private auth: AuthService,
              private router: Router) { }
  signIn() {
    this.inscriptionForm?.submit();
  }

  validMemberInscription(member: Member) {
    if(member.email && member.password) {
      this.auth.login(member.email, member.password).then(response => {
        if(response) {
          this.router.navigateByUrl('material-list');
        }
      });
    }
  }

}
