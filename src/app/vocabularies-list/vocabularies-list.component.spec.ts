import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabulariesListComponent } from './vocabularies-list.component';

describe('VocabulariesListComponent', () => {
  let component: VocabulariesListComponent;
  let fixture: ComponentFixture<VocabulariesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocabulariesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabulariesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
