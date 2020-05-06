import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatBadgeModule } from "@angular/material/badge";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

const matimportarray = [
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatInputModule,
  MatTabsModule,
  MatIconModule,
  MatMenuModule,
  MatBadgeModule,
  MatProgressSpinnerModule
];

@NgModule({
   imports: [
    CommonModule,
    matimportarray
  ],
  exports:[
    matimportarray
  ]
})
export class MaterialarrModule { }
