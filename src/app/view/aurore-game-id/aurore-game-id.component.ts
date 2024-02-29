import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseGamesService } from '../../../app/services/firebase-games/firebase-games.service'


@Component({
  selector: 'app-aurore-game-id',
  templateUrl: './aurore-game-id.component.html',
  styleUrl: './aurore-game-id.component.scss'
})
export class AuroreGameIdComponent implements OnInit{

   movieData: any;
   isFav: boolean = false;

  constructor(private router: Router, private location: Location, private firebase: FirebaseGamesService) {

    location.getState();

    const navigation = this.router.getCurrentNavigation();
    this.movieData = navigation!.extras.state as {
      movieData: any
    };

    //console.log(this.movieData['movieData'].developer);
    this.movieData = this.movieData['movieData'];
  }

  ngOnInit(): void {
  }

  toggleFav(){
    this.isFav = !this.isFav;

    if(this.isFav) {
      console.log("Inserindo", this.movieData['id']);
      this.firebase.insert(this.movieData, this.movieData['id']);
    }
    else {
      console.log("Excluindo", this.movieData['id']);
      this.firebase.delete(this.movieData['id'])
    }
  }
}

