import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerEvenementComponent } from './creer-evenement.component';

describe('CreerEvenementComponent', () => {
  let component: CreerEvenementComponent;
  let fixture: ComponentFixture<CreerEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
