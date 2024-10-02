import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridComponentComponent } from './datagrid-component.component';

describe('DatagridComponentComponent', () => {
  let component: DatagridComponentComponent;
  let fixture: ComponentFixture<DatagridComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatagridComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatagridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
