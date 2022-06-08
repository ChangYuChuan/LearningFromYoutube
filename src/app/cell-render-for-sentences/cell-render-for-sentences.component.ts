import { Component, OnInit } from '@angular/core';
import { ICellRendererParams, ValueService } from 'ag-grid-community';


@Component({
  selector: 'app-cell-render-for-sentences',
  templateUrl: './cell-render-for-sentences.component.html',
  styleUrls: ['./cell-render-for-sentences.component.css']
})
export class CellRenderForSentencesComponent implements OnInit {

  constructor() { }
  public params!: any[];

  agInit(params: ICellRendererParams): void {
    this.params = this.getValueToDisplay(params);
    console.log(this.params);
  }

  refresh(params: ICellRendererParams): boolean {
    this.params = this.getValueToDisplay(params);
    return true;
  }

  ngOnInit(): void {
  }

  private getValueToDisplay(params: ICellRendererParams) {

    let value = params.valueFormatted ? params.valueFormatted : params.value;
    console.log(Array.isArray(value),value);
    if (Array.isArray(value))
      return value;

    if (typeof value == 'string')
      return value.split('//').filter(element => element != '' && element != undefined);

    return [''];
  }

}
