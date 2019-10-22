import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaecComponent } from './gaec.component';

describe('GaecComponent', () => {
  let component: GaecComponent;
  let fixture: ComponentFixture<GaecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
