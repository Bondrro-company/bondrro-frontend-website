import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDownloadPopup } from './app-download-popup';

describe('AppDownloadPopup', () => {
  let component: AppDownloadPopup;
  let fixture: ComponentFixture<AppDownloadPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDownloadPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDownloadPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
