import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaResultadosComponent } from './tabela-resultados.component';

describe('TabelaResultadosComponent', () => {
  let component: TabelaResultadosComponent;
  let fixture: ComponentFixture<TabelaResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
