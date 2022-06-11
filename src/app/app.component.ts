import { Component, Input } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ITabularVocabularyInfo } from './models/itabular-vocabulary-info';
import { ExtractVocabulariesService } from './service/extract-vocabularies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() videoId: any = '';
  timeStamp: number = 0;

  tbData: ITabularVocabularyInfo[] = [];
  constructor(private vocSrv: ExtractVocabulariesService) {}

  async onSubmit(): Promise<void> {
    if (this.videoId == '') return;
    this.tbData = await this.vocSrv.getVocabularies(this.videoId);
  }
  setTimeStamp(timeStamp: number): void {
    if (timeStamp == undefined) return;
    this.timeStamp = timeStamp;
  }
}
