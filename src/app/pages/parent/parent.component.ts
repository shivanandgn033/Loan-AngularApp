import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Hydrogen3', weight: 1.00739, symbol: 'H3'},
  {position: 4, name: 'Helium4', weight: 4.00264, symbol: 'He4'},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 6, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 8, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 10, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 13, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 14, name: 'Helium', weight: 4.0026, symbol: 'He'}
  // ... more data
];

@Component({
  selector: 'app-parent',
  imports: [TableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}
