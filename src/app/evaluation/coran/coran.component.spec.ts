import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoranComponent } from './coran.component';

describe('CoranComponent', () => {
  let component: CoranComponent;
  let fixture: ComponentFixture<CoranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
