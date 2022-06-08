import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellRenderForSentencesComponent } from './cell-render-for-sentences.component';

describe('CellRenderForSentencesComponent', () => {
  let component: CellRenderForSentencesComponent;
  let fixture: ComponentFixture<CellRenderForSentencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellRenderForSentencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellRenderForSentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
