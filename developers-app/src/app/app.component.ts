import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";
import {Developer, Query} from "./types";
import {map} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DeveloperModalComponent} from "./developer-modal/developer-modal.component";
import {DevelopersService} from "./services/developers.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    developers: Observable<any>;
    viewContainerRef: ViewContainerRef;

    constructor(private apollo: Apollo, private modalService: NgbModal, private developerService: DevelopersService) {
    }

    ngOnInit() {
        this.developers = this.developerService.getAllDevelopers();
        this.developerService.updateDeveloper$.subscribe(developerInfo => {
            this.updateDevelopersInfo(developerInfo);
        })
    }

    openDeveloperModal(developerIndex: number) {
        const modalRef = this.modalService.open(DeveloperModalComponent);
        modalRef.componentInstance.developerIndex = developerIndex;
        modalRef.result.then(developerInformation => {

        })
    }

    updateDevelopersInfo(developerInfo) {
        console.log(developerInfo);
        if (!developerInfo.developerIndex) {
            this.developers = [{
                firstName: developerInfo.develoepr.firstName,
                lastName: developerInfo.develoepr.lastName,
                age: developerInfo.develoepr.age
            }, ...this.developers];
        }
        else {
            this.developers[developerInfo.developerIndex] = {
                firstName: developerInfo.develoepr.firstName,
                lastName: developerInfo.develoepr.lastName,
                age: developerInfo.develoepr.age
            };
        }

    }
}
