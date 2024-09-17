import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccNumberComponent } from './ccc-number.component';

describe('CccNumberComponent', () => {
  let component: CccNumberComponent;
  let fixture: ComponentFixture<CccNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
