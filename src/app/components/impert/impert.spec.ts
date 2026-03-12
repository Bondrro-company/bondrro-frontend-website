import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Impert } from './impert';

describe('Impert', () => {
  let component: Impert;
  let fixture: ComponentFixture<Impert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Impert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Impert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
