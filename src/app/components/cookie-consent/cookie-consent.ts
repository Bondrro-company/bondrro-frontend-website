import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  imports: [CommonModule],
  templateUrl: './cookie-consent.html',
  styleUrl: './cookie-consent.css',
})
export class CookieConsent implements OnInit {

  showBanner = false;

  ngOnInit() {
    const consent = localStorage.getItem('bondrro_cookie_consent');

    if (!consent) {
      this.showBanner = true;
    }
  }

  acceptCookies() {
    localStorage.setItem('bondrro_cookie_consent', 'accepted');
    this.showBanner = false;
  }

  rejectCookies() {
    localStorage.setItem('bondrro_cookie_consent', 'rejected');
    this.showBanner = false;
  }

}

