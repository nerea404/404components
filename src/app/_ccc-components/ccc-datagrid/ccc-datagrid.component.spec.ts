import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccDatagridComponent } from './ccc-datagrid.component';

describe('CccDatagridComponent', () => {
  let component: CccDatagridComponent;
  let fixture: ComponentFixture<CccDatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CccDatagridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CccDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
