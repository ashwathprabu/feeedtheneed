import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomegroupComponent } from './homegroup.component';

describe('HomegroupComponent', () => {
  let component: HomegroupComponent;
  let fixture: ComponentFixture<HomegroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomegroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
