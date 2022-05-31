import {Component, Input, OnInit} from '@angular/core';
import {Evenement} from "../../Evenement";

@Component({
  selector: 'app-events-crees',
  templateUrl: './events-crees.component.html',
  styleUrls: ['./events-crees.component.css']
})
export class EventsCreesComponent implements OnInit {
  @Input() evenements: Evenement[];

  constructor() { }

  ngOnInit(): void {
  }

}
