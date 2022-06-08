import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-cell-render-for-dictionary',
  templateUrl: './cell-render-for-dictionary.component.html',
  styleUrls: ['./cell-render-for-dictionary.component.css']
})
export class CellRenderForDictionaryComponent implements OnInit {

  constructor() { }
  public url!: string;

  agInit(params: ICellRendererParams): void {
    this.url = this.getValueToDisplay(params);
  }

  refresh(params: ICellRendererParams): boolean {
    this.url = this.getValueToDisplay(params);
    return true;
  }

  ngOnInit(): void {
  }

  private getValueToDisplay(params: ICellRendererParams) {

    return params.valueFormatted ? params.valueFormatted : params.value;
  }

}
