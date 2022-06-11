import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-render-for-time-stamp',
  templateUrl: './cell-render-for-time-stamp.component.html',
  styleUrls: ['./cell-render-for-time-stamp.component.css'],
})
export class CellRenderForTimeStampComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  submitTimeStamp(timeStamp:any):void {
    // To do: implement how we're gonna fire the timeStamp to the parent.
  }
}
