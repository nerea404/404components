import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccSplitterComponent } from './ccc-splitter.component';

describe('CccSplitterComponent', () => {
  let component: CccSplitterComponent;
  let fixture: ComponentFixture<CccSplitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccSplitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
