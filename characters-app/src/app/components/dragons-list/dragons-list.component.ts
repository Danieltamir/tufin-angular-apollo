import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DragonService} from "../../services/dragon.service";

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.css']
})
export class DragonsListComponent implements OnInit, OnDestroy {

  dragons$: any[];
  dragonsSubscription: Subscription;

  constructor(private dragonService: DragonService) {
  }

  ngOnInit() {
    this.dragonsSubscription = this.dragonService.getAllDragons().subscribe((response) => {
      this.dragons$ = response.data.dragons;
    });
  }

  ngOnDestroy() {
    this.dragonsSubscription.unsubscribe();
  }
}
