import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtractVocabulariesService } from './service/extract-vocabularies.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { VocabulariesListComponent } from './vocabularies-list/vocabularies-list.component';
import { BtnCellRenderForStopwordComponent } from './btn-cell-render-for-stopword/btn-cell-render-for-stopword.component'
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { CellRenderForSentencesComponent } from './cell-render-for-sentences/cell-render-for-sentences.component';
import { CellRenderForDictionaryComponent } from './cell-render-for-dictionary/cell-render-for-dictionary.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { CellRenderForTimeStampComponent } from './cell-render-for-time-stamp/cell-render-for-time-stamp.component';

@NgModule({
  declarations: [
    AppComponent,
    VocabulariesListComponent,
    BtnCellRenderForStopwordComponent,
    CellRenderForSentencesComponent,
    CellRenderForDictionaryComponent,
    CellRenderForTimeStampComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([BtnCellRenderForStopwordComponent]),
    YouTubePlayerModule
  ],
  providers: [ExtractVocabulariesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
