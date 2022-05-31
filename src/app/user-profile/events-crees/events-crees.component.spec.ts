import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreesComponent } from './events-crees.component';

describe('EventsCreesComponent', () => {
  let component: EventsCreesComponent;
  let fixture: ComponentFixture<EventsCreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsCreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
