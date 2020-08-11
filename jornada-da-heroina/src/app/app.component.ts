import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jornada-da-heroina';
  description = 'jornada-da-heroina';

  constructor(private router: Router) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
  }

  goTo(route: string) {
    this.router.navigate(['/' + route]);
  }
}
