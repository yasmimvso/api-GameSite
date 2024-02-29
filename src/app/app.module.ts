import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuroreGamesComponent } from './view/aurore-games/aurore-games.component';
import { MoviesListingComponent } from './utilitaries/list/movies-listing/movies-listing.component';
import { MovieCardComponent } from './utilitaries/list/movie-card/movie-card.component';
import { HeaderAuroreComponent } from './utilitaries/header/header-aurore/header-aurore.component';
import { AuroreThumbnailComponent } from './utilitaries/thumbnail/aurore-thumbnail/aurore-thumbnail.component'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule} from '@angular/material/toolbar';
import { AuroreGameIdComponent } from './view/aurore-game-id/aurore-game-id.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { MoviesFavComponent } from './utilitaries/list/movies-fav/movies-fav.component';



@NgModule({
  declarations: [
    AppComponent,
    AuroreGamesComponent,
    MoviesListingComponent,
    MovieCardComponent,
    AuroreThumbnailComponent,
    HeaderAuroreComponent,
    AuroreGameIdComponent,
    MoviesFavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
