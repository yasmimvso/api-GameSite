import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { GamesService } from '../../../services/games/games.service'
import { MatSelect } from '@angular/material/select';



interface Filter{
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-movies-listing',
  templateUrl: './movies-listing.component.html',
  styleUrl: './movies-listing.component.scss'
})
export class MoviesListingComponent implements OnInit{

  @Input() dados: any; // recebe dados completos

  movies: any;
  moviesCache: any;
  filter: any;

  platforms: any = [];
  develop: any = [];
  genres: any = [];
  dates: any = [];
  constructor(private listGame: GamesService){}

  @ViewChild('platformSelect')platForm!: MatSelect;
  @ViewChild('developerSelect')developer!: MatSelect;
  @ViewChild('genreSelect') genre!:MatSelect;
  @ViewChild('dateSelect') dateS!:MatSelect;
  
  ngOnInit(): void{

    this.listGame.getAllGames().subscribe((dados)=>{
      this.movies = dados;
      console.log(this.movies)
      this.moviesCache = dados;
      this.platforms = [... new Set(this.movies.map((item:any)=> item.platform))];
      this.develop = [... new Set(this.movies.map((item:any)=> item.developer))];
      this.genres = [... new Set(this.movies.map((item:any)=> item.genre))];

      // dando split para pegar apenas o ano de lançamento
      this.dates = [... new Set(this.movies.map((item:any)=> (item.release_date.split('-')[0])))];
    });

  }

  updateMovieList(filter:any): void{


    let new_data: any = this.moviesCache;

      // fazer a filtragem só por valores que não são undefined
     if(filter.platform!= undefined){
      new_data = new_data.filter((item:any)=>{
        return (item.platform == filter.platform)
      })

     }

     if(filter.developer!=undefined){

      new_data = new_data.filter((item:any)=>{
        return (item.developer == filter.developer)
      })

     }

     if(filter.genre!=undefined){
      new_data = new_data.filter((item:any)=>{
        return (item.genre == filter.genre)
      })
     }

     if(filter.date!=undefined){
      new_data = new_data.filter((item:any)=>{
        return (item.release_date.split('-')[0] == filter.date)
      })
     }


      this.movies = new_data;


  }

  checkFilter(): void{

    //// Fazer a verificação se a pessoa não colocou nada. Caso contrário
    let dataValue = {
      'platform' : this.platForm.value,
      'developer': this.developer.value,
      'genre': this.genre.value,
      'date': this.dateS.value
    }
    this.updateMovieList(dataValue)
  }

}
