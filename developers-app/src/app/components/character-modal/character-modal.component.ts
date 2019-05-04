import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CharacterService} from "../../services/character.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.css']
})
export class CharacterModalComponent implements OnInit, OnDestroy {

  @Input() characterId: any;
  @Input() characterIndex: number;
  @Output() onUpdateDeveloper = new EventEmitter();
  public characterSubscription: Subscription;
  public character: any = {locationInfo: {}};

  constructor(private characterService: CharacterService, private modalService: NgbModal) {
  }

  ngOnInit() {
    if (this.characterId) {
      this.characterSubscription = this.characterService.getCharacterById(this.characterId).subscribe((response) => {
        this.character = response.data.getCharacterById;
      });
    } else this.character.locationInfo = {};
  }

  addNewDeveloper() {
    this.characterService.addNewCharacter(this.character).subscribe(resultStatus => {
      if (resultStatus.data.addNewCharacter.successful) {
        this.modalService.dismissAll();
        this.characterService.updateCharacter$.next({
          character: this.character,
          characterIndex: this.characterId
        });
      }
    });
  }

  editDeveloper() {
    this.characterService.editCharacter(this.character).subscribe(resultStatus => {
      if (resultStatus.data.editCharacter.successful) {
        this.modalService.dismissAll();
        this.characterService.updateCharacter$.next({
          character: this.character,
          characterIndex: this.characterIndex
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.characterSubscription)
      this.characterSubscription.unsubscribe();
  }
}
