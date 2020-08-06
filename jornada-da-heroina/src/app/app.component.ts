import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jornada-da-heroina';
  description = 'jornada-da-heroina';

  constructor() {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
  }
}
