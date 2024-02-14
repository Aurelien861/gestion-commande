import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-button',
  standalone: true,
    imports: [
        ButtonModule
    ],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {

  constructor(private router: Router) {
  }

  goToMenu() {
    this.router.navigateByUrl('');
  }

}
