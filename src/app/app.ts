import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { AppDownloadPopup } from './components/app-download-popup/app-download-popup';
import { CommonModule } from '@angular/common';
import { CookieConsent } from "./components/cookie-consent/cookie-consent";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Footer, CommonModule, AppDownloadPopup, CookieConsent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
constructor(private translate: TranslateService, private titleService: Title) {

  const savedLang = 'de';

  this.translate.setDefaultLang('de');
  this.translate.use(savedLang);
  if (savedLang === 'de') {
  this.titleService.setTitle('Bondrro – Crowd-Delivery-Plattform');
} else {
  this.titleService.setTitle('Bondrro – Crowd Delivery Platform');
}
  this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
  if (event.lang === 'de') {
    this.titleService.setTitle('Bondrro – Crowd-Delivery-Plattform');
  } else {
    this.titleService.setTitle('Bondrro – Crowd Delivery Platform');
  }
});

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
