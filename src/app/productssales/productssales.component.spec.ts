import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductssalesComponent } from './productssales.component';

describe('ProductssalesComponent', () => {
  let component: ProductssalesComponent;
  let fixture: ComponentFixture<ProductssalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductssalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductssalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
