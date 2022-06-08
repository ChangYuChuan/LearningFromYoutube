import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, map, Observable, retry, tap } from 'rxjs';
import { IVocabulariesInfo } from '../models/ivocabularies-info';
import { ITabularVocabularyInfo } from '../models/itabular-vocabulary-info';

@Injectable({
  providedIn: 'root'
})
export class ExtractVocabulariesService {
  //To do: remove the hardcode
  userId:string = 'jimmychangtw';
  base_url:string = ' http://127.0.0.1:5000/api';
  constructor(private http:HttpClient ) { 

  }
  async getVocabularies(videoId:string): Promise<ITabularVocabularyInfo[]>{
    let result:ITabularVocabularyInfo[] = []
    let body ={'user_id':this.userId,'video_id':videoId};
    let url = `${this.base_url}/YoutubeCaption`;
    let subscription = this.http.post<IVocabulariesInfo>(url,body).pipe(
        tap(data=>console.log(data)),
        retry(3)
      );
    let arrivedData = await lastValueFrom(subscription);

    for(let voc of arrivedData.vocabularies) {
      let sentence:string[] = voc.timeStamp.map(
        (timeStamp)=> {
          return arrivedData.sentence[timeStamp];
        }
      );
      result.push(
        {
          "Vocabulary":voc.word,
          "TimeStamp":voc.timeStamp,
          "Sentence": sentence.join('//'),
          "DictionaryUrl":`https://www.merriam-webster.com/dictionary/${voc.word}`
        }
      );
    }
    return result;
  }
  async setStopwords(stopwords:string[]): Promise<any> {
    let url = `${this.base_url}/YoutubeCaption/Stopwords`
    let body ={'user_id':this.userId,'stopwords':stopwords};
    // We need to send  responseType: ‘text’ as ‘json’, from client side so angualr httpclient will interpret it as text instead of json.
    // use {observe:'response'} to get intact response including status codew etc..
    let response = this.http.post<any>(url,body,{responseType:'text' as 'json',observe:'response'}).pipe(
      tap(data=>console.log('setStopwords',data)),
    );
    let result = await lastValueFrom(response);
    return result;
  }
}
