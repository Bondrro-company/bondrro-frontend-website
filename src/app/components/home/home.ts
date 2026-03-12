import { Component } from '@angular/core';
import { WhyBondroo } from "../why-bondroo/why-bondroo";
import { AppDownloadPopup } from "../app-download-popup/app-download-popup";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    TranslateModule,
    WhyBondroo,
    AppDownloadPopup
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  showDownloadPopup = false;

  openDownloadPopup() {
    this.showDownloadPopup = true;
  }

  closeDownloadPopup() {
    this.showDownloadPopup = false;
  }

}