import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccTabsComponent } from './ccc-tabs.component';

describe('CccTabsComponent', () => {
  let component: CccTabsComponent;
  let fixture: ComponentFixture<CccTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
