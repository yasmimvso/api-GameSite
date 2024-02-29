import { Injectable } from '@angular/core';
import {FavList} from './firebase-games'
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FirebaseGamesService {

  constructor(private db: AngularFireDatabase) { }

  insert(movie: FavList, key: number){
   this.db.object(`movies/${key}`).set(movie)
  }

  delete(key: number){
    this.db.object(`movies/${key}`).remove()
  }

  getList(){
    return this.db.list('movies').snapshotChanges().pipe(
      map(changes => {
        // Para cada nó da lista 'movies', extraia a chave e os dados do filme
        return changes.map(c => {
          const data = c.payload.val();
          const key = c.payload.key;
          return { key, ...(typeof data === 'object' ? data : {}) };
        });
      })
    );
  }
}
