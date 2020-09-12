import { Component, OnInit, Input } from '@angular/core';
import { HostCardModel } from '../../index/models/host-card-model';

@Component({
  selector: 'app-host-card',
  templateUrl: './host-card.component.html',
  styleUrls: ['./host-card.component.scss']
})
export class HostCardComponent implements OnInit {

  @Input() host: HostCardModel;
  constructor() { }

  ngOnInit(): void {
  }

}
