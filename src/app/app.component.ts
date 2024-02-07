import { Component } from '@angular/core';

interface TableRow {
  date: Date;
  firstName: string;
  lastName: string;
}

interface GroupedData {
  [key: string]: TableRow[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableData: TableRow[] = [
    { date: new Date('2022-01-01'), firstName: 'ahmed', lastName: 'saeed' },
    { date: new Date('2022-02-01'), firstName: 'ali', lastName: 'hassan' },
    { date: new Date('2022-03-01'), firstName: 'mohamed', lastName: 'hamdy' },
    { date: new Date('2023-01-01'), firstName: 'ismael', lastName: 'fares' },
    { date: new Date('2023-02-01'), firstName: 'riad', lastName: 'abdelsalam' },
    { date: new Date('2023-03-01'), firstName: 'fathi', lastName: 'ahmed' },
    { date: new Date('2024-01-01'), firstName: 'fatma', lastName: 'noh' },
    { date: new Date('2026-03-01'), firstName: 'shimaa', lastName: 'mohamed' },
    { date: new Date('2025-01-01'), firstName: 'Sarah', lastName: 'ragab' }
  ];

  groupedData: GroupedData = {};
  groupKeys: string[] = [];

  constructor() {
    this.groupData();
  }

  groupData() {
    const groups: GroupedData = {};
    this.tableData.forEach(row => {
      const year = row.date.getFullYear().toString();
      if (groups[year]) {
        groups[year].push(row);
      } else {
        groups[year] = [row];

      }

    });

    const uniqueYears = Object.keys(groups).filter(year => groups[year].length === 1);
    const commonYears = Object.keys(groups).filter(year => groups[year].length > 1);

    this.groupedData['unique years'] = uniqueYears.flatMap(year => groups[year]);


    commonYears.forEach(year => {
      this.groupedData[year] = groups[year];
    });

    this.groupKeys = Object.keys(this.groupedData);
    console.log("groupedData :", this.groupedData );
    console.log("groupKeys :", this.groupKeys );
  }
}
