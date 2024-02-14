import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MenuComponent} from "../../menu/menu.component";
import {AutoFocusModule} from "primeng/autofocus";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {EditMemberComponent} from "../../member/edit-member/edit-member.component";
import {InscriptionComponent} from "../../inscription/inscription.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {RemoveMemberComponent} from "../../member/remove-member/remove-member.component";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {Member} from "../../../models/member.model";
import {Material} from "../../../models/material.model";
import {MaterialService} from "../../../services/material.service";
import {BadgeModule} from "primeng/badge";
import {EditMaterialComponent} from "../edit-material/edit-material.component";
import {RemoveMaterialComponent} from "../remove-material/remove-material.component";
import {AddMaterialComponent} from "../add-material/add-material.component";
import {OrderMaterialComponent} from "../order-material/order-material.component";

@Component({
  selector: 'app-material-list',
  standalone: true,
  imports: [
    MenuComponent,
    AutoFocusModule,
    ButtonModule,
    DialogModule,
    EditMemberComponent,
    InscriptionComponent,
    NgForOf,
    NgIf,
    RemoveMemberComponent,
    RippleModule,
    SharedModule,
    TableModule,
    BadgeModule,
    NgStyle,
    EditMaterialComponent,
    RemoveMaterialComponent,
    AddMaterialComponent,
    OrderMaterialComponent
  ],
  templateUrl: './material-list.component.html',
  styleUrl: './material-list.component.scss'
})

export class MaterialListComponent implements OnInit{
  @ViewChild('dt') dataTable?: Table
  @ViewChild('addMaterialForm', {read: AddMaterialComponent}) addMaterialForm?: AddMaterialComponent;
  @ViewChild('orderMaterialComponent', {read: OrderMaterialComponent}) orderMaterialComponent?: OrderMaterialComponent;
  materials : Material[] = [];
  selectedMaterialToOrder: Material[] = [];
  loading: boolean = true;
  columns: any[] = []
  selectedMaterial?: Material;
  isEditionDialogOpen = false;
  isDeletionDialogOpen = false;
  isShopDialogOpen = false;
  isAddDialogOpen = false;

  groupId : number = 1;

  constructor(private materialService: MaterialService) {}

  ngOnInit() {
    this.columns = [
      { field: 'serial', header: 'Numéro de série', pSortableColumn: 'serial', frozen: true },
      { field: 'brand', header: 'Marque', pSortableColumn: 'brand'},
      { field: 'model', header: 'Modèle', pSortableColumn: 'model'},
      { field: 'type', header: 'Type', pSortableColumn: 'type'},
      { field: 'price', header: 'Prix', pSortableColumn: 'price'},
      { field: 'buttons', header: '', visible: true}
    ];
    this.materialService.getMaterialsDataPromise().then((materials) => {
      this.materials = materials;
      this.loading = false;
      this.dataTable?.reset();
    });
  }

  openShopDialog() {
    if(this.selectedMaterialToOrder.length > 0) {
      this.isShopDialogOpen = true;
    }
  }

  closeShopDialog() {
    this.isShopDialogOpen = false;
  }

  submitOrder() {
    this.isShopDialogOpen = false;
    this.orderMaterialComponent?.submitOrder();
  }

  openAddDialog() {
    this.isAddDialogOpen = true;
  }

  closeAddDialog() {
    this.isAddDialogOpen = false;
    this.addMaterialForm?.reset();
  }

  submitCreationForm() {
    if(this.addMaterialForm?.submit()) {
      this.isAddDialogOpen = false;
    }
  }

  openEditionDialog(material: Material) {
    this.selectedMaterial = material;
    this.isEditionDialogOpen = true;
  }

  closeEditionDialog() {
    this.isEditionDialogOpen = false;
  }

  openDeletionDialog(material: Material) {
    this.selectedMaterial = material;
    this.isDeletionDialogOpen = true;
  }

  closeDeletionDialog() {
    this.isDeletionDialogOpen = false;
  }

  computeTotalPrice (): number {
    let totalPrice = 0;
    this.selectedMaterialToOrder.forEach((product) => {
      if(product.price) {
        totalPrice += product.price;
      }
    });
    return totalPrice;
  }

}
