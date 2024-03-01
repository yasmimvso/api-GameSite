import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesListingComponent } from '../src/app/utilitaries/list/movies-listing/movies-listing.component';
import { GamesService  } from  '../src/app/services/games/games.service'

import { of } from 'rxjs';

// Estou faazendo teste com jasmine, é um framework de testes inerente ao próprio angular

describe('ListagemJogosComponent', () => {
  let component: MoviesListingComponent ;
  let fixture: ComponentFixture<MoviesListingComponent >;
  let jogosService: jasmine.SpyObj<GamesService>;

  let jogosMock : any[] = [];

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MoviesListingComponent],
      providers: [
        { provide: GamesService, useValue: jasmine.createSpyObj('GamesService', ['getAllGames']) }
      ],
    });

    fixture = TestBed.createComponent(MoviesListingComponent);
    component = fixture.componentInstance;
    jogosService = TestBed.inject(GamesService) as jasmine.SpyObj<GamesService>;
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir a listagem de jogos corretamente', () => {

    // como não tive acesso ao banco de dados completo. Fiz uma requisição via servidor para a API
    jogosService.getAllGames().subscribe((dado)=>{
      jogosMock = dado
    })


    jogosService.getAllGames.and.returnValue(of(jogosMock));


    fixture.detectChanges();

    // Aqui acessa valor de variável interna da função. A mesmarecebe valores gerais
    const elementosJogos = component.moviesCache;

    expect(elementosJogos.length).toBe(jogosMock.length);

    elementosJogos.forEach((elemento:any, index:any) => {
      const jogo = jogosMock[index];
      expect(elemento.textContent).toContain(jogo.nome);
      expect(elemento.textContent).toContain(jogo.capa);
      expect(elemento.textContent).toContain(jogo.plataforma);
    });
  });
});
