import { IVocabularyInfo } from "./ivocabulary-info";

export interface IVocabulariesInfo {
    vocabularies:IVocabularyInfo[];
    video_url:string;
    sentence: {[key: string]:string};
}
