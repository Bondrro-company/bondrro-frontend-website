import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privecy } from './privecy';

describe('Privecy', () => {
  let component: Privecy;
  let fixture: ComponentFixture<Privecy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privecy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Privecy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
