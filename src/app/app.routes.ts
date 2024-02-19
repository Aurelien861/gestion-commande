import { Routes } from '@angular/router';
import {ConnexionComponent} from "./components/connexion/connexion.component";
import {AuthGuard} from "./services/permission.service";
import {InscriptionPageComponent} from "./components/inscription/inscription-page/inscription-page.component";
import {OrderListComponent} from "./components/order/order-list/order-list.component";

export const routes: Routes = [
  {path: '', component: OrderListComponent, canActivate: [AuthGuard]},
  {path: 'material-list', component: OrderListComponent, canActivate: [AuthGuard]},
  {path: 'auth/login', component: ConnexionComponent},
  {path: 'sign-in', component: InscriptionPageComponent},
];
