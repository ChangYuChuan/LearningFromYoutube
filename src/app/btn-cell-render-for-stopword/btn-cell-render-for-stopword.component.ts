import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-btn-cell-render-for-stopword',
  templateUrl: './btn-cell-render-for-stopword.component.html',
  styleUrls: ['./btn-cell-render-for-stopword.component.css']
})

export class BtnCellRenderForStopwordComponent implements ICellRendererAngularComp  {
  constructor() { }
  public params!: ICellRendererParams;

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    this.params = params;
    return true;
  }

  ngOnInit(): void {
  }

  // private getValueToDisplay(params: ICellRendererParams) {
  //   return params.valueFormatted ? params.valueFormatted : params.value;
  // }

  invokeParentMethod():void {
    console.log('BtnCellRenderForStopwordComponent','invokeParentMethod')
    this.params.context.componentParent.setStopwords(this.params.value);
  }

}
