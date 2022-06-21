import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDolaresComponent } from './listar-dolares.component';

describe('ListarDolaresComponent', () => {
  let component: ListarDolaresComponent;
  let fixture: ComponentFixture<ListarDolaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDolaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
