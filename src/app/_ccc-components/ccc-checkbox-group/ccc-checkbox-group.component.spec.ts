import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccCheckboxGroupComponent } from './ccc-checkbox-group.component';

describe('CccCheckboxGroupComponent', () => {
  let component: CccCheckboxGroupComponent;
  let fixture: ComponentFixture<CccCheckboxGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccCheckboxGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
