import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { SnackMessengerComponent } from "./components/snack-messenger/snack-messenger.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        SpinnerComponent,
        SnackMessengerComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatTabsModule,
        MatExpansionModule,
        MatBadgeModule,
        MatRippleModule,
        MatDialogModule,
        MatRadioModule,
        MatNativeDateModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatTabsModule,
        MatExpansionModule,
        MatBadgeModule,
        MatRippleModule,
        MatDialogModule,
        MatRadioModule,
        MatNativeDateModule,
        
        //Componentes que serão usados como tags em templates precisam ser exportados
        SpinnerComponent,
        SnackMessengerComponent
    ],
    entryComponents: [SnackMessengerComponent]
})
export class SharedModule {}