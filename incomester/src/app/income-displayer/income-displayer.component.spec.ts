import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeDisplayerComponent } from './income-displayer.component';

describe('IncomeDisplayerComponent', () => {
  let component: IncomeDisplayerComponent;
  let fixture: ComponentFixture<IncomeDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeDisplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
