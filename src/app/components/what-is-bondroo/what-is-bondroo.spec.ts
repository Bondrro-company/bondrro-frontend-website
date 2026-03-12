import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsBondroo } from './what-is-bondroo';

describe('WhatIsBondroo', () => {
  let component: WhatIsBondroo;
  let fixture: ComponentFixture<WhatIsBondroo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsBondroo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsBondroo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
