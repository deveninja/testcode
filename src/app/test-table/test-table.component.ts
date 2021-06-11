import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

export interface TableColumns {
  date: Date;
  ran: number;
  clicks: number;
}

function generateObj() {
  return {date: new Date(), ran: Math.floor(Math.random() * 100) / 3, clicks: 0}
}

let ELEMENT_DATA: TableColumns[] = [
  generateObj()
];


@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.scss']
})

export class TestTableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'ran', 'clicks'];
  dataSource = ELEMENT_DATA;
  filteredSource = []
  source = interval(5000);
  constructor() { }

  ngOnInit(): void {
    this.source.subscribe( _ => {
      this.dataSource = [...this.dataSource, generateObj()]
    })
  }

  trackClick = (id: number) => {
    this.dataSource[id].clicks++
  }

  onFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    // implement function
  }
}
