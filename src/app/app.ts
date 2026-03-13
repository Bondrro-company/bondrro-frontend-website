import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { AppDownloadPopup } from './components/app-download-popup/app-download-popup';
import { CommonModule } from '@angular/common';
import { CookieConsent } from "./components/cookie-consent/cookie-consent";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Footer, CommonModule, AppDownloadPopup, CookieConsent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
constructor(private translate: TranslateService) {

  const savedLang = localStorage.getItem('lang') || 'de';

  this.translate.setDefaultLang('de');
  this.translate.use(savedLang);

}
  protected readonly title = signal('bondroo');
  showPopup = false;

openPopup(){
  this.showPopup = true;
}

closePopup(){
  this.showPopup = false;
}
}
