import { AfterContentChecked, Component, Input, ɵdetectChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterContentChecked {

  rows: any[] = [];
  
  lastRowOfRowsIndex(): number {
    let lastRowIndex = this.rows.length - 1;
    return lastRowIndex;
  }

  selectValue: number;

  addRow(): void {
    this.rows.push([]);
  }

  addCell(): void {
    this.rows[this.lastRowOfRowsIndex()].push([]);
  }

  addElem(): void {
    if (this.selectValue == 0 || this.selectValue == undefined) {
      this.selectValue = 1;
    }    
    if (this.rows.length === 0 || this.rows[this.lastRowOfRowsIndex()].length === 3) {
      this.addRow();
    }
    for (let i = 0; i < this.selectValue; i++) {
      this.addCell();
      if (this.rows[this.lastRowOfRowsIndex()].length === 3) {
        break;
      }
    }
  }

  ngAfterContentChecked(): void {
    // console.log(ɵdetectChanges);
    console.log(this.selectValue)
  }
}