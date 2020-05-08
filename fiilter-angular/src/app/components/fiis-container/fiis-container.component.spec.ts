import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiisContainerComponent } from './fiis-container.component';

describe('FiisContainerComponent', () => {
  let component: FiisContainerComponent;
  let fixture: ComponentFixture<FiisContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiisContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiisContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
