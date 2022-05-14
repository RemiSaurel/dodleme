import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerEvenementsComponent } from './lister-evenements.component';

describe('ListerEvenementsComponent', () => {
  let component: ListerEvenementsComponent;
  let fixture: ComponentFixture<ListerEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerEvenementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
