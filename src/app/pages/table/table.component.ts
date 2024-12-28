
import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {  NgFor, SlicePipe, CommonModule } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  imports: [FormsModule,CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  standalone:true
})
export class TableComponent implements OnInit {
  @Input() data: PeriodicElement[] = [];
  @Input() displayedColumns:  string[] = [ 'position', 'name', 'weight', 'symbol'];

  dataSource: PeriodicElement[] = [];
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  filter: string = '';
  ngOnInit()
  {
    this.dataSource = this.data;
  }
  
  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
  
  applyFilter() {
    const filterValue = this.filter.trim().toLowerCase();
    this.dataSource = this.data.filter((item:any) => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(filterValue);
      });
    });
  }
  
  sort(property: string) {
    this.dataSource = this.dataSource.sort((a:any, b:any) => {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });
  }
}




