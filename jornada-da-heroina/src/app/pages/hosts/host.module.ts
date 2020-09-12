import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostsComponent } from './hosts/hosts.component';
import { HostCardComponent } from './host-card/host-card.component';

@NgModule({
  declarations: [HostsComponent, HostCardComponent],
  exports: [HostsComponent, HostCardComponent],
  imports: [
    CommonModule
  ]
})
export class HostModule { }
