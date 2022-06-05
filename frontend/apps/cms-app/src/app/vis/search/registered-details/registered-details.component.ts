import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-details',
  templateUrl: './registered-details.component.html',
  styleUrls: ['./registered-details.component.scss'],
})
export class RegisteredDetailsComponent implements OnInit {
  /**
   * @description Store treatment data
   */
  treatmentData: any;
  showDetails = false;
  hideOthers = false;

  /**
   * @description get registered details
   */
  @Input() registeredDetails: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  treatmentDetails() {
    this.showDetails = true;
    this.hideOthers = true;
  }
}
