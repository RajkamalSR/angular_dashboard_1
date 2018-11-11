import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import "dhtmlx-scheduler";
import { } from "@types/dhtmlxscheduler";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @ViewChild("scheduler_here") schedulerContainer: ElementRef;

  constructor() { }

  ngOnInit() {
    scheduler.config.container_autoresize = false;
    scheduler.init(this.schedulerContainer.nativeElement, new Date());

  }
}
