import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccTreelistComponent } from './ccc-treelist.component';

describe('CccTreelistComponent', () => {
  let component: CccTreelistComponent;
  let fixture: ComponentFixture<CccTreelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccTreelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccTreelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
