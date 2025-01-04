import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLearningPathComponent } from './dashboard-learning-path.component';

describe('DashboardLearningPathComponent', () => {
  let component: DashboardLearningPathComponent;
  let fixture: ComponentFixture<DashboardLearningPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLearningPathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLearningPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
