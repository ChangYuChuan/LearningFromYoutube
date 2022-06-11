import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { BtnCellRenderForStopwordComponent } from '../btn-cell-render-for-stopword/btn-cell-render-for-stopword.component';
import { CellRenderForDictionaryComponent } from '../cell-render-for-dictionary/cell-render-for-dictionary.component';
import { CellRenderForSentencesComponent } from '../cell-render-for-sentences/cell-render-for-sentences.component';
import { ITabularVocabularyInfo } from '../models/itabular-vocabulary-info';
import { ExtractVocabulariesService } from '../service/extract-vocabularies.service';

@Component({
  selector: 'app-vocabularies-list',
  templateUrl: './vocabularies-list.component.html',
  styleUrls: ['./vocabularies-list.component.css'],
})
export class VocabulariesListComponent implements OnInit {
  public gridOptions: GridOptions;
  readonly columnDefs: any[] = [
    { field: 'Vocabulary', sortable: true },
    { field: 'TimeStamp' },
    {
      field: 'DictionaryUrl',
      cellRenderer: CellRenderForDictionaryComponent,
      minWidth: 100,
    },
    {
      field: 'Sentence',
      cellRenderer: CellRenderForSentencesComponent,
      minWidth: 150,
      autoHeight: true,
      autoWeight: true,
    },
    {
      headerName: 'Remove',
      field: 'Vocabulary',
      cellRenderer: BtnCellRenderForStopwordComponent,
      minWidth: 150,
    },
  ];
  public defaultColDef: any = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  };
  @Input() dataSource: ITabularVocabularyInfo[] = [];
  @Output() notifyChoosedTimeStamp: EventEmitter<any> = new EventEmitter<any>();
  public context: any;
  constructor(private vocSrv: ExtractVocabulariesService) {
    this.gridOptions = { context: { componentParent: this } };
  }

  ngOnInit(): void {}

  public async setStopwords(vocabularies: string): Promise<void> {
    let result = await this.vocSrv.setStopwords([vocabularies]);
    if (result != undefined && result.status == '201')
      this.removeVocabulary(vocabularies);
  }

  public removeVocabulary(vocabulary: string): void {
    console.log('removeVocabulary', vocabulary);
    let indx = this.dataSource.findIndex(
      (element) => element.Vocabulary == vocabulary
    );
    if (indx == -1) return;
    let temp: ITabularVocabularyInfo[] = [];
    temp.push(...this.dataSource);
    temp.splice(indx, 1);
    // assign the dataSource to refresh the table.
    this.dataSource = temp;
  }

  public selectTimeStamp(timeStamp: any): void {
    console.log('user select', timeStamp);
    this.notifyChoosedTimeStamp.emit(timeStamp);
  }
}
