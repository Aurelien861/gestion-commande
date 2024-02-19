import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuComponent} from "../../menu/menu.component";
import {AutoFocusModule} from "primeng/autofocus";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InscriptionFormComponent} from "../../inscription/inscription-form/inscription-form.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {RippleModule} from "primeng/ripple";
import {MessageService, SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {Material} from "../../../models/material.model";
import {BadgeModule} from "primeng/badge";

import { ToastModule } from 'primeng/toast';
import {EditOrderComponent} from "../edit-order/edit-order.component";
import {RemoveOrderComponent} from "../remove-order/remove-order.component";
import {AddOrderComponent} from "../add-order/add-order.component";
import {OrderService} from "../../../services/order-service";
import {Order} from "../../../models/order.model";
import {UtilsService} from "../../../services/utils-service";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-material-list',
  standalone: true,
  imports: [
    MenuComponent,
    AutoFocusModule,
    ButtonModule,
    DialogModule,
    InscriptionFormComponent,
    NgForOf,
    NgIf,
    RippleModule,
    SharedModule,
    TableModule,
    BadgeModule,
    NgStyle,
    EditOrderComponent,
    RemoveOrderComponent,
    AddOrderComponent,
    ToastModule,
    FormsModule
  ],
  providers: [MessageService],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})

export class OrderListComponent implements OnInit{
  @ViewChild('dt') dataTable?: Table
  @ViewChild('addMaterialForm', {read: AddOrderComponent}) addMaterialForm?: AddOrderComponent;
  orders : Material[] = [];
  loading: boolean = true;
  columns: any[] = []
  selectedOrder?: Material;
  isEditionDialogOpen = false;
  isDeletionDialogOpen = false;
  isAddDialogOpen = false;

  beginDateFilter: string | null = null;
  endDateFilter: string | null = null;
  clientNameFilter: string | null = null;
  sellerNameFilter: string | null = null;
  materialIdsFilter: string | null = null;

  constructor(private orderService: OrderService,
              private messageService: MessageService,
              private utilsService: UtilsService) {}

  ngOnInit() {
    this.columns = [
      { field: 'date', header: 'Date', pSortableColumn: 'date', frozen: true },
      { field: 'clientId', header: 'Numéro client', pSortableColumn: 'clientId'},
      { field: 'clientName', header: 'Client', pSortableColumn: 'clientName'},
      { field: 'materialIds', header: 'Produits commandés', pSortableColumn: 'materialIds'},
      { field: 'totalPrice', header: 'Prix', pSortableColumn: 'totalPrice'},
      { field: 'sellerId', header: 'Numéro vendeur', pSortableColumn: 'sellerId'},
      { field: 'sellerName', header: 'Vendeur', pSortableColumn: 'sellerName'},
      { field: 'buttons', header: '', visible: true}
    ];
    this.resetOrders();
  }

  loadOrders() {
    this.orders = [];
    this.orderService.getOrders(this.beginDateFilter, this.endDateFilter, this.clientNameFilter, this.sellerNameFilter, this.materialIdsFilter)
      .subscribe((orders) => {
      for(let rawOrder of orders){
        this.orders.push(this.parseOrder(rawOrder));
      }
      this.loading = false;
    });
  }

  resetOrders() {
    this.endDateFilter = null;
    this.beginDateFilter = null;
    this.clientNameFilter = null;
    this.sellerNameFilter = null;
    this.materialIdsFilter = null;
    this.dataTable?.reset();
    this.loadOrders();
  }

  onFilter(event: any, filterType: string) {
    const value = event.target.value === '' ? null : event.target.value;
    if(filterType === 'sellerName') {
      this.sellerNameFilter = value;
    } else if(filterType === 'clientName') {
      this.clientNameFilter = value;
    } else if(filterType === 'materialIds') {
      this.materialIdsFilter = value;
    } else if(filterType === 'beginDate') {
      this.beginDateFilter = value;
    } else if(filterType === 'endDate') {
      this.endDateFilter = value;
    }
  }

  validAddOrder(material: Material) {
    this.loadOrders();
    const message = 'Nouvelle commande ajoutée';
    this.messageService.add({ severity: 'success', summary: 'Succès', detail: message });
  }

  openAddDialog() {
    this.isAddDialogOpen = true;
  }

  closeAddDialog() {
    this.isAddDialogOpen = false;
  }

  submitCreationForm() {
    this.isAddDialogOpen = false;
  }

  openEditionDialog(material: Material) {
    this.selectedOrder = material;
    this.isEditionDialogOpen = true;
  }

  closeEditionDialog() {
    this.isEditionDialogOpen = false;
  }

  openDeletionDialog(material: Material) {
    this.selectedOrder = material;
    this.isDeletionDialogOpen = true;
  }

  closeDeletionDialog() {
    this.isDeletionDialogOpen = false;
  }

  parseOrder(rawOrder: any): Order {
    return {
      id: rawOrder.id,
      clientName: rawOrder.nomMembreClient,
      sellerName: rawOrder.nomMembreActif,
      date: this.utilsService.convertDateFormat(rawOrder.date),
      totalPrice: rawOrder.prixTotal,
      materialIds: rawOrder.listeIdMateriaux,
      clientId: rawOrder.idMembreClient,
      sellerId: rawOrder.idMembreActif,
    }
  }

}
