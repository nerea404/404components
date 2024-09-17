import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccListaComponent } from './ccc-lista.component';

describe('CccListaComponent', () => {
  let component: CccListaComponent;
  let fixture: ComponentFixture<CccListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
