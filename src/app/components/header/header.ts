import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from "@angular/router";
import { TranslateModule ,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, RouterLink,RouterModule ,TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

 constructor(private translate: TranslateService) {

  const savedLang = localStorage.getItem('lang') || 'en';

  this.translate.setDefaultLang('en');
  this.translate.use(savedLang);

  this.selectedLang = this.languages.find(l =>
    l.code.toLowerCase() === savedLang
  ) || this.languages[0];
}

  isOpen = false;
  langOpen = false;

  languages = [
    {
      code: 'EN',
      name: 'English',
      flag: 'https://flagcdn.com/w40/gb.png'
    },
    {
      code: 'DE',
      name: 'German',
      flag: 'https://flagcdn.com/w40/de.png'
    }
  ];

  selectedLang = this.languages[0];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleLang() {
    this.langOpen = !this.langOpen;
  }

 selectLang(lang: any) {
  this.selectedLang = lang;
  this.langOpen = false;

  const langCode = lang.code.toLowerCase();

  this.translate.use(langCode);
  localStorage.setItem('lang', langCode);
}

  @Output() downloadClick = new EventEmitter<void>();

  openDownloadPopup() {
    this.downloadClick.emit();
  }

}
