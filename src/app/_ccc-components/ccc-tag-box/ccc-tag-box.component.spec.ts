import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccTagBoxComponent } from './ccc-tag-box.component';

describe('CccTagBoxComponent', () => {
  let component: CccTagBoxComponent;
  let fixture: ComponentFixture<CccTagBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccTagBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccTagBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
