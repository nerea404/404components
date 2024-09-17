import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccBotoneraComponent } from './ccc-botonera.component';

describe('CccBotoneraComponent', () => {
  let component: CccBotoneraComponent;
  let fixture: ComponentFixture<CccBotoneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccBotoneraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccBotoneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
