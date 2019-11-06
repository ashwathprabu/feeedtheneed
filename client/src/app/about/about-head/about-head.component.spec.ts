import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHeadComponent } from './about-head.component';

describe('AboutHeadComponent', () => {
  let component: AboutHeadComponent;
  let fixture: ComponentFixture<AboutHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
