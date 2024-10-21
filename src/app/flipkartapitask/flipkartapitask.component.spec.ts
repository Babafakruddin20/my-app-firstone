import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartapitaskComponent } from './flipkartapitask.component';

describe('FlipkartapitaskComponent', () => {
  let component: FlipkartapitaskComponent;
  let fixture: ComponentFixture<FlipkartapitaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartapitaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartapitaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
