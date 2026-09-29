import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumForm } from './sum-form';

describe('SumForm', () => {
  let component: SumForm;
  let fixture: ComponentFixture<SumForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SumForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
