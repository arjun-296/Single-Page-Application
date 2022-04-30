import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class Checks {
  selectedStartDate: Date;

  startDate_val(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let currentdate = new Date();
      currentdate.setHours(currentdate.getHours() + 5);
      currentdate.setMinutes(currentdate.getMinutes() + 30);
      let selecteddate = new Date(control.value);
      this.selectedStartDate = selecteddate;
      return selecteddate < currentdate
        ? { startDate_val: { value: control.value } }
        : null;
    };
  }

  endDate_val(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let enddate = new Date(control.value);
      return this.selectedStartDate < enddate
        ? { startDate_val: { value: control.value } }
        : null;
    };
  }
}
