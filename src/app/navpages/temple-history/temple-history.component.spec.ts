import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleHistoryComponent } from './temple-history.component';

describe('TempleHistoryComponent', () => {
  let component: TempleHistoryComponent;
  let fixture: ComponentFixture<TempleHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
