import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodbodyComponent } from './foodbody.component';

describe('FoodbodyComponent', () => {
  let component: FoodbodyComponent;
  let fixture: ComponentFixture<FoodbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
