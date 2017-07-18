import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component'
import { CreateComponent } from './create/create.component'
import { GamesComponent } from './games/games.component'


const routes: Routes = [
    {path: '', pathMatch: 'full', component: ListComponent},
    {path: 'create', component: CreateComponent},
    {path: 'games', component: GamesComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }