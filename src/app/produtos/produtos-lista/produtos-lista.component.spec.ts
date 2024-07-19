import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosListaComponent } from './produtos-lista.component';

describe('ProdutosListaComponent', () => {
  let component: ProdutosListaComponent;
  let fixture: ComponentFixture<ProdutosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
