import {Component, OnInit} from '@angular/core';
import {data1} from "../../../data/data1";
import {getRandomInt} from "../../../shared/functoins/random-numbers";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  data: { ref: string; value: string }[] = data1;
  number: number;
  backgroundNumber = 1;

  constructor() {
    this.number = getRandomInt(0, this.data.length - 1);
    this.backgroundNumber = getRandomInt(1, 7);
  }

  ngOnInit(): void {
  }

}
