import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebanktaskComponent } from './createbanktask.component';

describe('CreatebanktaskComponent', () => {
  let component: CreatebanktaskComponent;
  let fixture: ComponentFixture<CreatebanktaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebanktaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatebanktaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
