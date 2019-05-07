import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharactersListComponent} from "./components/characters-list/characters-list.component";
import {DragonsListComponent} from "./components/dragons-list/dragons-list.component";

const routes: Routes = [
  {path: 'characters', component: CharactersListComponent},
  {path: 'dragons', component: DragonsListComponent},
  {path: '**', redirectTo: 'characters'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
