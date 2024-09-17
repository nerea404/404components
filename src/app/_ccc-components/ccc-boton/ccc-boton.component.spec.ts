import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccBotonComponent } from './ccc-boton.component';

describe('CccBotonComponent', () => {
  let component: CccBotonComponent;
  let fixture: ComponentFixture<CccBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccBotonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
