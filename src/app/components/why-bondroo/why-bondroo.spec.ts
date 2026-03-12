import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBondroo } from './why-bondroo';

describe('WhyBondroo', () => {
  let component: WhyBondroo;
  let fixture: ComponentFixture<WhyBondroo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyBondroo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyBondroo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
