import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ListarDolaresComponent } from './listar-dolares.component';

describe('ListarDolaresComponent', () => {
  let listarDolaresComponent: ListarDolaresComponent;
  let fixture: ComponentFixture<ListarDolaresComponent>;
  let entradaMock: {};
  let salidaMock: {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarDolaresComponent],
      imports: [HttpClientTestingModule],
      providers: [ListarDolaresComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListarDolaresComponent);
    listarDolaresComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([ListarDolaresComponent], (component: ListarDolaresComponent) => {
    listarDolaresComponent = component;
    entradaMock = {
      1546387200: 694.77,
      1546473600: 697.09
    };
    salidaMock = [
      ['1546387200', 694.77],
      ['1546473600', 697.09]
    ];
  }));

  it("Debe existir el controller ListarDolaresComponent", () => {
    expect(ListarDolaresComponent).toBeTruthy();
  });

  it('Debe llamar al controller ListarDolaresComponent.transformaData() y transformar la entrada tipo objeto a arreglo', function () {
    let result: any = {};
    result = listarDolaresComponent.transformaData(entradaMock);
    expect(result).toEqual(salidaMock);
  });
});
