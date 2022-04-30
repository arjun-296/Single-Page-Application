import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Checks } from './validations';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.css'],
})
export class LivestreamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selectedStartDate: Date = null;
  private val_check = new Checks();

  livestreamdetails = new FormGroup({
    event_tit: new FormControl('', [
      Validators.required,
      Validators.minLength(100),
    ]),
    start_date: new FormControl('', [
      Validators.required,
      this.val_check.startDate_val(),
    ]),
    end_date: new FormControl('', [
      Validators.required,
      this.val_check.startDate_val(),
    ]),
  });

  get event_tit() {
    return this.livestreamdetails.get('event_tit');
  }
  get start_date() {
    return this.livestreamdetails.get('start_date');
  }
  get end_date() {
    return this.livestreamdetails.get('end_date');
  }
}
