import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule} from "apollo-angular";
import {FormsModule} from "@angular/forms";
import {DeveloperModalComponent} from "./developer-modal/developer-modal.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        AppComponent,
        DeveloperModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ApolloModule,
        GraphQLModule,
        HttpClientModule,
        FormsModule,
        NgbModule
    ],
    providers: [],
    entryComponents: [DeveloperModalComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
