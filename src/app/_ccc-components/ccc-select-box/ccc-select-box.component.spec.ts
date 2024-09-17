import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccSelectBoxComponent } from './ccc-select-box.component';

describe('CccSelectBoxComponent', () => {
  let component: CccSelectBoxComponent;
  let fixture: ComponentFixture<CccSelectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccSelectBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
