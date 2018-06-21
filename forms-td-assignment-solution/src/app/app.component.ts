import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  @ViewChild('signupForm') sgnForm: NgForm;
  onSubmit() {
    console.log(this.sgnForm.value);
  }
}
