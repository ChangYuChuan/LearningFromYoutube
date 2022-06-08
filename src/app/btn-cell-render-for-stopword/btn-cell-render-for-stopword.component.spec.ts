import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCellRenderForStopwordComponent } from './btn-cell-render-for-stopword.component';

describe('BtnCellRenderForStopwordComponent', () => {
  let component: BtnCellRenderForStopwordComponent;
  let fixture: ComponentFixture<BtnCellRenderForStopwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnCellRenderForStopwordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCellRenderForStopwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
