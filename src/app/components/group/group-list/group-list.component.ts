import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuComponent} from "../../menu/menu.component";
import {AutoFocusModule} from "primeng/autofocus";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {EditMemberComponent} from "../../member/edit-member/edit-member.component";
import {InscriptionComponent} from "../../inscription/inscription.component";
import {NgForOf, NgIf} from "@angular/common";
import {RemoveMemberComponent} from "../../member/remove-member/remove-member.component";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {Group} from "../../../models/group.model";
import {GroupService} from "../../../services/group-service";
import {AddGroupComponent} from "../add-group/add-group.component";
import {RemoveGroupComponent} from "../remove-group/remove-group.component";
import {EditGroupComponent} from "../edit-group/edit-group.component";

@Component({
  selector: 'app-group-list',
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
    AddGroupComponent,
    RemoveGroupComponent,
    EditGroupComponent
  ],
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.scss'
})
export class GroupListComponent  implements OnInit{

  @ViewChild('dt') dataTable?: Table
  @ViewChild('addGroupForm', {read: AddGroupComponent}) addGroupForm?: AddGroupComponent;
  groups : Group[] = [];
  loading: boolean = true;
  columns: any[] = []
  selectedGroup?: Group;

  isEditionDialogOpen = false;
  isDeletionDialogOpen = false;
  isCreationDialogOpen = false;

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.columns = [
      { field: 'number', header: 'Numéro', pSortableColumn: 'number', frozen: true },
      { field: 'name', header: 'Nom', pSortableColumn: 'name'},
      { field: 'city', header: 'Ville', pSortableColumn: 'city'},
      { field: 'cp', header: 'Code postal', pSortableColumn: 'cp'},
      { field: 'buttons', header: '', visible: true}
    ];
    this.groupService.getGroupsDataPromise().then((groups) => {
      this.groups = groups;
      this.loading = false;
      this.dataTable?.reset();
    });
  }

  openCreationDialog() {
    this.isCreationDialogOpen = true;
  }

  closeCreationDialog() {
    this.isCreationDialogOpen = false;
    this.addGroupForm?.reset();
  }

  submitInscriptionForm() {
    if(this.addGroupForm?.submit()) {
      this.isCreationDialogOpen = false;
    }
  }

  openEditionDialog(group: Group) {
    this.selectedGroup = group;
    this.isEditionDialogOpen = true;
  }

  closeEditionDialog() {
    this.isEditionDialogOpen = false;
  }

  openDeletionDialog(group: Group) {
    this.selectedGroup = group;
    this.isDeletionDialogOpen = true;
  }

  closeDeletionDialog() {
    this.isDeletionDialogOpen = false;
  }
}
