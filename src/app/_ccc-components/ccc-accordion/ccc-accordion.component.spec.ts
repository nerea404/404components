import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccAccordionComponent } from './ccc-accordion.component';

describe('CccAccordionComponent', () => {
  let component: CccAccordionComponent;
  let fixture: ComponentFixture<CccAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
