import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from '@services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  visible: boolean;

  private subscription: Subscription = new Subscription();

  constructor(private spinner: SpinnerService) { }

  ngOnInit() {
    this.subscription.add(this.spinner.visible.subscribe(visible => this.visible = visible));
  }

  isVisible(): boolean {
    return this.visible !== undefined && this.visible;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
