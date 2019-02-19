import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";
import {Developer, Query} from "./types";
import {map} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DeveloperModalComponent} from "./developer-modal/developer-modal.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    developers: any;
    viewContainerRef: ViewContainerRef;

    constructor(private apollo: Apollo, private modalService: NgbModal) {
    }

    ngOnInit() {
        this.apollo.query<Query>({
            query: gql`
                query getDevelopers {
                    getDevelopers {
                        firstName
                        lastName
                        age
                    }
                }
            `,
        }).subscribe(result => {
            this.developers = result.data.getDevelopers
        })
    }

    openDeveloperModal(developerIndex: number) {
        const modalRef = this.modalService.open(DeveloperModalComponent);
        modalRef.componentInstance.developerIndex = developerIndex;
    }
}
