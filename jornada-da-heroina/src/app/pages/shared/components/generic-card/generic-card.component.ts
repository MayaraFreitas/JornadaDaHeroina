import { Component, Input, OnInit } from '@angular/core';
import { GenericCardModel } from '../../model/generic-card-model';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent implements OnInit {

  @Input() genericCardModel: GenericCardModel;
  @Input() imageFolder: string;

  constructor() { }

  ngOnInit(): void {
  }

  goToUrl(url: string){
    window.open(url, '_blank');
  }
}
