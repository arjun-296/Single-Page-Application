import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips/chip-input';

export interface Tags {
  name: string;
}

@Component({
  selector: 'app-dynamic-chips',
  templateUrl: './dynamic-chips.component.html',
  styleUrls: ['./dynamic-chips.component.css'],
})
export class DynamicChipsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tags[] = [{ name: 'Trending' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tags: Tags): void {
    const index = this.tags.indexOf(tags);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
