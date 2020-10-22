import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'jornada-da-heroina';
  description = 'jornada-da-heroina';

  @ViewChild('interviews') interviewsRef: ElementRef;
  @ViewChild('checkboxMenu') checkboxMenu: ElementRef;

  constructor(private router: Router) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
  }

  goTo(route: string) {
    this.router.navigate(['/' + route]);
  }

  onClickMenu(route: string) {
    this.checkboxMenu.nativeElement.checked = false;
    this.goTo(route);
  }
}
