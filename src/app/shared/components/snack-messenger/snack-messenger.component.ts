import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snack-messenger.component.html',
    styleUrls: ['./snack-messenger.component.css']
})
export class SnackMessengerComponent implements OnInit {

    constructor(private snackBarRef: MatSnackBarRef<SnackMessengerComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

    ngOnInit() { }

    close() {
        this.snackBarRef.dismiss();
    }
}
