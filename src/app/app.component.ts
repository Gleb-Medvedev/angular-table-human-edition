import { AfterContentChecked, Component, ɵdetectChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {

  rows: any[] = [];

  selectValue: number;

  addRow(): void {
    this.rows.push([]);
  }

  addCell(): void {
    this.rows[this.rows.length - 1].push([]);
  }

  addElem(): void {
    if (this.rows.length === 0 || this.rows[this.rows.length - 1].length === 3) {
      this.addRow();
    }
    for (let i = 0; i < this.selectValue; i++) {
      this.addCell();
      if (this.rows[this.rows.length - 1].length === 3) {
        break;
      }
    }
  }

  ngAfterContentChecked(): void {
    console.log(ɵdetectChanges)
  }
}