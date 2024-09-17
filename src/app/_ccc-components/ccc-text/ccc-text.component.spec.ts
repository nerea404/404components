import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccTextComponent } from './ccc-text.component';

describe('CccTextComponent', () => {
  let component: CccTextComponent;
  let fixture: ComponentFixture<CccTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
