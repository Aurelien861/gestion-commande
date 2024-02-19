import {Component, OnInit} from '@angular/core';
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
export class MenuButtonComponent implements OnInit{

  buttonLabel! : string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.buttonLabel = 'Gestion commandes'
  }

  goToMenu() {
    this.router.navigateByUrl('material-list');
  }

}
