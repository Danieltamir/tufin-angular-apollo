import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DevelopersService} from "../services/developers.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-developer-modal',
    templateUrl: './developer-modal.component.html',
    styleUrls: ['./developer-modal.component.css']
})
export class DeveloperModalComponent implements OnInit {

    @Input() developerIndex: number;
    developer: any = {
        locationInfo: {}
    };

    @Output() onUpdateDeveloper = new EventEmitter();

    constructor(private developersService: DevelopersService, private modalService: NgbModal) {
    }

    ngOnInit() {
        if (this.developerIndex) {
            this.developer = this.developersService.getDeveloperById(this.developerIndex).subscribe(result => {
                result.data.developers.single
            });
        }
        else this.developer.locationInfo = {}
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
