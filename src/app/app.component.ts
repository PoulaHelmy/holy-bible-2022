import {Component, OnInit} from '@angular/core';
import {getRandomInt} from "./shared/functoins/random-numbers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;
  loader: number;
  journey: number;

  constructor(private router: Router) {
    this.loader = getRandomInt(1, 100);
    this.journey = getRandomInt(1, 500);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      if (this.journey % 2 === 0) {
        this.router.navigate(['/journey1']).then();
      } else {
        this.router.navigate(['/journey3']).then();
      }
      // switch (this.journey) {
      //   case 1:
      //     this.router.navigate(['/journey1']).then();
      //     break;
      //   case 2:
      //     this.router.navigate(['/journey1']).then();
      //     break;
      //   case 3:
      //     this.router.navigate(['/journey3']).then();
      //     break;
      //   default: {
      //     this.router.navigate(['/journey1']).then();
      //   }
      // }
    }, 3000);
  }
}
