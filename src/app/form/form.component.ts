import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlDirective,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  videodetails = new FormGroup({
    firstgroup: new FormGroup({
      url: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        ),
      ]),
      vid_tit: new FormControl('', [
        Validators.required,
        Validators.minLength(90),
      ]),
    }),
    secondgroup: new FormGroup({
      vid_desc: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      vid_dur: new FormControl('', [
        Validators.required,
        Validators.pattern('([0-1]?d|2[0-3]):([0-5]?d):([0-5]?d)'),
      ]),
    }),
    thirdgroup: new FormGroup({
      chn_tit: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      rec_date: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    }),
    fourthgroup: new FormGroup({
      chck1: new FormControl(''),
      chck2: new FormControl(''),
    }),
    fifthgroup: new FormGroup({
      city: new FormControl('', Validators.required),
      lic: new FormControl('', Validators.required),
      dist: new FormControl('', Validators.required),
    }),
    sixthgroup: new FormGroup({
      chck3: new FormControl(''),
      chck4: new FormControl(''),
    }),
    seventhgroup: new FormGroup({
      vc: new FormControl('', Validators.required),
      vis: new FormControl('', Validators.required),
    }),
  });

  displaymsg() {
    alert('Data has been added');
    location.reload();
  }
  get url() {
    return this.videodetails.get('firstgroup').get('url');
  }

  get vid_tit() {
    return this.videodetails.get('firstgroup').get('vid_tit');
  }
  get vid_dur() {
    return this.videodetails.get('secondgroup').get('vid_dur');
  }

  get vid_desc() {
    return this.videodetails.get('secondgroup').get('vid_desc');
  }

  get chn_tit() {
    return this.videodetails.get('thirdgroup').get('chn_tit');
  }

  get rec_date() {
    return this.videodetails.get('thirdgroup').get('rec_date');
  }
  get chck1() {
    return this.videodetails.get('fourthgroup').get('chck1');
  }
  get chck2() {
    return this.videodetails.get('fourthgroup').get('chck2');
  }

  get city() {
    return this.videodetails.get('fifthgroup').get('city');
  }

  get lic() {
    return this.videodetails.get('fifthgroup').get('lic');
  }
  get dist() {
    return this.videodetails.get('fifthgroup').get('dist');
  }
  get chck3() {
    return this.videodetails.get('sixthgroup').get('chck3');
  }
  get chck4() {
    return this.videodetails.get('sixthgroup').get('chck4');
  }
  get vc() {
    return this.videodetails.get('seventhgroup').get('vc');
  }
  get vis() {
    return this.videodetails.get('seventhgroup').get('vis');
  }
}
