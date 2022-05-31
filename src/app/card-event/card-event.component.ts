import {Component, Input, OnInit} from '@angular/core';
import {Evenement} from "../Evenement";

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent implements OnInit {
  @Input() evenements: Evenement[];

  constructor() { }

  ngOnInit(): void {
  }

}
