import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [FormsModule,CommonModule,TranslateModule,RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
agree: boolean = false;
}
