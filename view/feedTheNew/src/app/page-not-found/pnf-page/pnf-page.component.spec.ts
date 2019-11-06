import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnfPageComponent } from './pnf-page.component';

describe('PnfPageComponent', () => {
  let component: PnfPageComponent;
  let fixture: ComponentFixture<PnfPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnfPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
