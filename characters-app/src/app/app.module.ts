import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GraphQLModule} from './graphql/graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule} from "apollo-angular";
import {FormsModule} from "@angular/forms";
import {CharacterModalComponent} from "./components/character-modal/character-modal.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ScrollingModule} from "@angular/cdk/scrolling";
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { DragonsListComponent } from './components/dragons-list/dragons-list.component';

@NgModule({
    declarations: [
        AppComponent,
        CharacterModalComponent,
        CharactersListComponent,
        DragonsListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ApolloModule,
        GraphQLModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        ScrollingModule
    ],
    providers: [],
    entryComponents: [CharacterModalComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
