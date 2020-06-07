import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DancerDetailsComponent } from './dancer-details.component';

describe('DancerDetailsComponent', () => {
  let component: DancerDetailsComponent;
  let fixture: ComponentFixture<DancerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DancerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DancerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
