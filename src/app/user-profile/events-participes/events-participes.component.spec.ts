import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsParticipesComponent } from './events-participes.component';

describe('EventsParticipesComponent', () => {
  let component: EventsParticipesComponent;
  let fixture: ComponentFixture<EventsParticipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsParticipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsParticipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
