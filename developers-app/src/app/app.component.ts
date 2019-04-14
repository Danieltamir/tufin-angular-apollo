import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Subscription} from "rxjs/index";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DeveloperModalComponent} from "./developer-modal/developer-modal.component";
import {DevelopersService} from "./services/developers.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    developers$: any[];
    developersSubscription: Subscription;

    constructor(private apollo: Apollo, private modalService: NgbModal, private developerService: DevelopersService) {
    }

    ngOnInit() {
        this.developersSubscription = this.developerService.getAllDevelopers().subscribe((response) => {
            this.developers$ = response.data.getDevelopers;
        });

        this.developerService.updateDeveloper$.subscribe(developerInfo => {
            this.updateDevelopersInfo(developerInfo);
        })
    }

    openDeveloperModal(developerIndex: number) {
        const modalRef = this.modalService.open(DeveloperModalComponent);
        modalRef.componentInstance.developerIndex = developerIndex;
    }

    updateDevelopersInfo(developerInfo) {
        console.log(developerInfo);
        if (!developerInfo.developerIndex) {
            this.developers$ = [{
                firstName: developerInfo.developer.firstName,
                lastName: developerInfo.developer.lastName,
                age: developerInfo.developer.age
            }, ...this.developers$];
        }
        else {
            this.developers$[developerInfo.developerIndex] = {
                firstName: developerInfo.developer.firstName,
                lastName: developerInfo.developer.lastName,
                age: developerInfo.developer.age
            };
            this.developers$ = [...this.developers$];
        }
    }

    deleteDeveloper(developerIndex: number) {
        this.developerService.deleteDeveloper().subscribe((response)=>{
            // console.log(response);
            if(response.data.deleteDeveloper.successful)
                this.developers$ = this.developers$.filter((developer,index) => {
                    return index !== developerIndex;
                })
        })
    }

    ngOnDestroy() {
        this.developersSubscription.unsubscribe();
    }
}
