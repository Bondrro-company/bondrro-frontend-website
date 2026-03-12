import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-download-popup',
  imports: [CommonModule,TranslateModule],
  templateUrl: './app-download-popup.html',
  styleUrl: './app-download-popup.css',
})
export class AppDownloadPopup {
 @Output() close = new EventEmitter<void>();

  closePopup(){
    this.close.emit();
  }
}
