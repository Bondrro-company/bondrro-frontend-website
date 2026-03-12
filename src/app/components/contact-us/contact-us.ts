import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs implements OnInit {

  submitted = false;
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private translate: TranslateService
  ) {

    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue]
    });

    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {

    const savedLang = localStorage.getItem('lang') || 'en';
    this.translate.use(savedLang);

  }

  submitForm(): void {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.contactService
      .sendMessage(this.contactForm.value)
      .subscribe({

        next: () => {
          this.submitted = true;
          this.contactForm.reset();
        },

        error: (err) => {
          console.error('Contact error:', err);
        }

      });

  }

}