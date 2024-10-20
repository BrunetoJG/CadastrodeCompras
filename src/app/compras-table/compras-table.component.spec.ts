import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasTableComponent } from './compras-table.component';

describe('ComprasTableComponent', () => {
  let component: ComprasTableComponent;
  let fixture: ComponentFixture<ComprasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprasTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
