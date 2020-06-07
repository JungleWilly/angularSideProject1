import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanseursComponent } from './dancers.component';

describe('DanseursComponent', () => {
  let component: DanseursComponent;
  let fixture: ComponentFixture<DanseursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DanseursComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
