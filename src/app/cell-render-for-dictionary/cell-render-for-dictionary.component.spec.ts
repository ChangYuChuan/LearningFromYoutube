import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellRenderForDictionaryComponent } from './cell-render-for-dictionary.component';

describe('CellRenderForDictionaryComponent', () => {
  let component: CellRenderForDictionaryComponent;
  let fixture: ComponentFixture<CellRenderForDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellRenderForDictionaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellRenderForDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
