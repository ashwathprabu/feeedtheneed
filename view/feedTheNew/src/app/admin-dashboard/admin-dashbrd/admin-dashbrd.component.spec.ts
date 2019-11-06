import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashbrdComponent } from './admin-dashbrd.component';

describe('AdminDashbrdComponent', () => {
  let component: AdminDashbrdComponent;
  let fixture: ComponentFixture<AdminDashbrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashbrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashbrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
