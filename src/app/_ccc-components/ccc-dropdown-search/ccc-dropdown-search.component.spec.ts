import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccDropdownSearchComponent } from './ccc-dropdown-search.component';

describe('CccDropdownSearchComponent', () => {
  let component: CccDropdownSearchComponent;
  let fixture: ComponentFixture<CccDropdownSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccDropdownSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccDropdownSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
