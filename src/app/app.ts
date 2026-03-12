import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { AppDownloadPopup } from './components/app-download-popup/app-download-popup';
import { CommonModule } from '@angular/common';
import { CookieConsent } from "./components/cookie-consent/cookie-consent";

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Footer, CommonModule, AppDownloadPopup, CookieConsent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bondroo');
  showPopup = false;

openPopup(){
  this.showPopup = true;
}

closePopup(){
  this.showPopup = false;
}
}
