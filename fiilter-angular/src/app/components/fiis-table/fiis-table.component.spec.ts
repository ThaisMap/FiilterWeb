import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiisTableComponent } from './fiis-table.component';

describe('FiisTableComponent', () => {
  let component: FiisTableComponent;
  let fixture: ComponentFixture<FiisTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiisTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
