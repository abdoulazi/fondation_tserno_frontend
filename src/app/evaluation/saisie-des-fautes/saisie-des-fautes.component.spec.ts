import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieDesFautesComponent } from './saisie-des-fautes.component';

describe('SaisieDesFautesComponent', () => {
  let component: SaisieDesFautesComponent;
  let fixture: ComponentFixture<SaisieDesFautesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieDesFautesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieDesFautesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
