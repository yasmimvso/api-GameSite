import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirebaseGamesService } from '../../../services/firebase-games/firebase-games.service'

@Component({
  selector: 'app-movies-fav',
  templateUrl: './movies-fav.component.html',
  styleUrl: './movies-fav.component.scss'
})
export class MoviesFavComponent implements OnInit {
  @ViewChild('movieList') movieListRef!: ElementRef;

  scrollAmount = 200;

  listMovies: any;

  constructor(private firebase: FirebaseGamesService){}

  ngOnInit(): void {

    this.firebase.getList().subscribe((dados)=>{
      this.listMovies = dados
    });
  }

  scrollLeft(): void {
    this.movieListRef.nativeElement.scrollLeft -= this.scrollAmount;
  }

  scrollRight(): void {
    this.movieListRef.nativeElement.scrollLeft += this.scrollAmount;
  }
}
