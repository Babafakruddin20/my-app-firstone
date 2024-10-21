import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployidcardsComponent } from './employidcards.component';

describe('EmployidcardsComponent', () => {
  let component: EmployidcardsComponent;
  let fixture: ComponentFixture<EmployidcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployidcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployidcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
