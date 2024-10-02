import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponentsComponent } from './forms-components.component';

describe('FormsComponentsComponent', () => {
  let component: FormsComponentsComponent;
  let fixture: ComponentFixture<FormsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
