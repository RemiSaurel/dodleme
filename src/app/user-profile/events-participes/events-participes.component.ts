import {Component, Input, OnInit} from '@angular/core';
import {Evenement} from "../../Evenement";

@Component({
  selector: 'app-events-participes',
  templateUrl: './events-participes.component.html',
  styleUrls: ['./events-participes.component.css']
})
export class EventsParticipesComponent implements OnInit {
  @Input() evenements: Evenement[];

  constructor() { }

  ngOnInit(): void {
  }

}
