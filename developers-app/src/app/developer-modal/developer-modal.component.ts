import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {DevelopersService} from "../services/developers.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Subscription} from "rxjs/index";

@Component({
    selector: 'app-developer-modal',
    templateUrl: './developer-modal.component.html',
    styleUrls: ['./developer-modal.component.css']
})
export class DeveloperModalComponent implements OnInit, OnDestroy {

    @Input() developerIndex: number;
    developerSubscription: Subscription;
    developer: any = {
        locationInfo: {}
    };

    @Output() onUpdateDeveloper = new EventEmitter();

    constructor(private developersService: DevelopersService, private modalService: NgbModal) {
    }

    ngOnInit() {
        if (this.developerIndex) {
            this.developerSubscription = this.developersService.getDeveloperById().subscribe((response) => {
                this.developer = response.data.getDeveloperById;
            });
        }
        else this.developer.locationInfo = {}
    }

    ngOnDestroy() {
        this.developerSubscription.unsubscribe();
    }

    addNewDeveloper() {
        this.developersService.addNewDeveloper(this.developer).subscribe(resultStatus => {
            if (resultStatus.data.addNewDeveloper.successful) {
                this.modalService.dismissAll();
                this.developersService.updateDeveloper$.next({
                    developer: this.developer,
                    developerIndex: this.developerIndex
                });
            }
        });
    }

    editDeveloper() {
        this.developersService.editDeveloper(this.developer).subscribe(resultStatus => {
            if (resultStatus.data.editDeveloper.successful) {
                this.modalService.dismissAll();
                this.developersService.updateDeveloper$.next({
                    developer: this.developer,
                    developerIndex: this.developerIndex
                });
            }
        });
    }
}
