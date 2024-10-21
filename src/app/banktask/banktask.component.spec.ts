import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanktaskComponent } from './banktask.component';

describe('BanktaskComponent', () => {
  let component: BanktaskComponent;
  let fixture: ComponentFixture<BanktaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanktaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanktaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
