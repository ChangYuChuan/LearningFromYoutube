import { Component, OnInit } from '@angular/core';
import { ICellRendererParams, ValueService } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';
@Component({
  selector: 'app-cell-render-for-time-stamp',
  templateUrl: './cell-render-for-time-stamp.component.html',
  styleUrls: ['./cell-render-for-time-stamp.component.css'],
})
export class CellRenderForTimeStampComponent implements ICellRendererAngularComp  {
  constructor() { }

  public params!: any;
  public timeStampList:any[]=[];

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.timeStampList = this.getTimeStampToDisplay(params);
  }

  refresh(params: ICellRendererParams): boolean {
    this.params = params;
    this.timeStampList = this.getTimeStampToDisplay(params);
    return true;
  }

  private getTimeStampToDisplay(params: ICellRendererParams) {

    let value = params.value;
    if (Array.isArray(value))
      return value;

    if (typeof value == 'string')
      return value.split(',').filter(element => element != '' && element != undefined);

    return [''];
  }
  

  submitTimeStamp(timeStamp:any):void {
    
    console.log('CellRenderForTimeStampComponent',timeStamp)
    this.params.context.componentParent.selectTimeStamp(timeStamp);
  }
}
