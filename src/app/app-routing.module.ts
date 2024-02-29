import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuroreGamesComponent } from '../app/view/aurore-games/aurore-games.component'
import {AuroreGameIdComponent } from '../app/view/aurore-game-id/aurore-game-id.component'

const routes: Routes = [
  { path: '', component: AuroreGamesComponent},
  {path: 'movie', component: AuroreGameIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
