import { TestBed } from '@angular/core/testing';

import { ExtractVocabularyService } from './extract-vocabulary.service';

describe('ExtractVocabularyService', () => {
  let service: ExtractVocabularyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractVocabularyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
