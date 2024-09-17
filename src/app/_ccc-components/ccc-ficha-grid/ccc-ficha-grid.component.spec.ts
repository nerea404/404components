import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccFichaGridComponent } from './ccc-ficha-grid.component';

describe('CccFichaGridComponent', () => {
  let component: CccFichaGridComponent;
  let fixture: ComponentFixture<CccFichaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccFichaGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccFichaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
