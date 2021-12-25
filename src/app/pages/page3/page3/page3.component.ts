import {Component, OnInit} from '@angular/core';
import {getRandomInt} from "../../../shared/functoins/random-numbers";
import {Media} from "../../../data/media";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {
  data: { type: string; value: string }[] = Media;
  number: number;

  constructor() {
    this.number = getRandomInt(0, this.data.length - 1);
  }


  ngOnInit(): void {
  }

}
