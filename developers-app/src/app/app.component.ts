import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CharacterModalComponent} from "./components/character-modal/character-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  openDeveloperModal(characterIndex: number) {
    const modalRef = this.modalService.open(CharacterModalComponent);
    modalRef.componentInstance.characterIndex = characterIndex;
  }
}
