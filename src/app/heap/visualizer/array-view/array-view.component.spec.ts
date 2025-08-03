import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayViewComponent } from './array-view.component';

describe('ArrayViewComponent', () => {
  let component: ArrayViewComponent;
  let fixture: ComponentFixture<ArrayViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
