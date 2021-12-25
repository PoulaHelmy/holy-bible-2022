import {Component, OnInit} from '@angular/core';
import {data1} from "../../../data/data1";
import {getRandomInt} from "../../../shared/functoins/random-numbers";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  data: { ref: string; value: string }[] = data1;
  number: number;

  constructor() {
    this.number = getRandomInt(0, this.data.length - 1);
  }

  ngOnInit(): void {
  }

}
