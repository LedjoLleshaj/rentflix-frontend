import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from "@angular/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { DatePipe, NgFor, NgIf } from "@angular/common";
import { MatSortModule } from "@angular/material/sort";
import { Rental } from "../../../models/rental.model";

@Component({
  selector: "app-history-table",
  templateUrl: "./history-table.component.html",
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatPaginatorModule, NgIf, NgFor, MatSortModule, DatePipe],
})
export class HistoryTableComponent {
  columns: string[] = ["title", "rental_date", "return_date", "rental_period", "address", "amount", "rental-info"];
  @Input() data: Rental[] = [];
  @Input() total: number = 0;
  @Output() nextPage: EventEmitter<any> = new EventEmitter();
  @Output() infoRental: EventEmitter<any> = new EventEmitter();
  @Output() announceSortChange: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule;

  /*@HostListener("window:keydown.arrowright", ["$event"]) keyRightEvent(event: KeyboardEvent) {
    event.preventDefault();
    let currentElement = document.activeElement as HTMLElement;
    if (currentElement) {
      let elem = currentElement.nextElementSibling as HTMLElement;
      if (elem?.attributes?.getNamedItem("tabindex")?.value === "0") {
        elem.focus();
      } else {
        this.keyDownEvent(event);
      }
    }
  }

  @HostListener("window:keydown.arrowleft", ["$event"])
  keyLeftEvent(event: KeyboardEvent) {
    event.preventDefault();
    let currentElement = document.activeElement as HTMLElement;
    if (currentElement) {
      let elem = currentElement.previousElementSibling;
      if (elem) {
        (elem as HTMLElement).focus();
      } else {
        this.keyUpEvent(event);
      }
    }
  }

  @HostListener("window:keydown.arrowup", ["$event"]) keyUpEvent(event: KeyboardEvent) {
    event.preventDefault();
    let currentElement = document.activeElement as HTMLElement;
    if (currentElement) {
      let elem = currentElement.parentElement?.previousElementSibling?.firstChild;
      if (elem) {
        (elem as HTMLElement).focus();
      }
    }
  }

  @HostListener("window:keydown.arrowdown", ["$event"]) keyDownEvent(event: KeyboardEvent) {
    event.preventDefault();
    let currentElement = document.activeElement as HTMLElement;
    if (currentElement) {
      let elem = currentElement.parentElement?.nextElementSibling?.firstChild;
      if (elem) {
        (elem as HTMLElement).focus();
      }
    }
  }*/
}
