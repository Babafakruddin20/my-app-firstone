import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailapitaskComponent } from './mailapitask.component';

describe('MailapitaskComponent', () => {
  let component: MailapitaskComponent;
  let fixture: ComponentFixture<MailapitaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailapitaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailapitaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
