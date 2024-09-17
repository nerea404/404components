import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccFichaComponent } from './ccc-ficha.component';

describe('CccFichaComponent', () => {
  let component: CccFichaComponent;
  let fixture: ComponentFixture<CccFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccFichaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
