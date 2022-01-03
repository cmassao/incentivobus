import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConsumosComponent } from './lista-consumos.component';

describe('ListaConsumosComponent', () => {
  let component: ListaConsumosComponent;
  let fixture: ComponentFixture<ListaConsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConsumosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
