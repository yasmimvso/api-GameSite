import { Component , Input, OnInit} from '@angular/core';
import { Router,  NavigationExtras } from '@angular/router';
import { FirebaseGamesService } from '../../../services/firebase-games/firebase-games.service'




@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit{
   @Input() movies : any;

   listMovie: any;

   constructor(private router: Router, private firebase: FirebaseGamesService){}

   ngOnInit(): void {}

   checkIdinfo(){

    /*this.firebase.insert(this.movies, this.movies['id']);

    this.firebase.getList().subscribe((dados)=>{

       this.listMovie = dados
       console.log("Lista de Favoritos: ", this.listMovie)

    })*/


    const navigationExtras: NavigationExtras = {
      state: {
        movieData: this.movies
      }
    };

    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['movie'], navigationExtras);
    });

   }
}
