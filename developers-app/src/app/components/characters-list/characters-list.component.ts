import {Component, OnDestroy, OnInit} from '@angular/core';
import {CharacterModalComponent} from "../character-modal/character-modal.component";
import {CharacterService} from "../../services/character.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit , OnDestroy {
  characters$: any[];
  charactersSubscription: Subscription;

  constructor(private characterService: CharacterService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.charactersSubscription = this.characterService.getAllCharacters()
      .subscribe((response) => {
      this.characters$ = response.data.characters;
    });

    this.characterService.updateCharacter$
      .subscribe(characterInfo => {
      this.updateCharactersInfo(characterInfo);
    })
  }

  deleteCharacter(character, characterIndex) {
    this.characterService.deleteCharacter(character.id)
      .subscribe((response) => {
      if (response.data.deleteCharacter.successful)
        this.characters$ = this.characters$.filter((character, index) => {
          return index !== characterIndex;
        })
    })
  }

  killCharacter(character) {
    this.characterService.killCharacter(character.id)
      .subscribe((response) => {
      if (response.data.killCharacter.successful)
        character.alive = false;
    })
  }

  updateCharactersInfo(characterInfo) {
    console.log(characterInfo);
    if (!characterInfo.characterIndex) {
      this.characters$ = [{
        firstName: characterInfo.character.firstName,
        lastName: characterInfo.character.lastName,
        alive: characterInfo.character.alive
      }, ...this.characters$];
    }
    else {
      this.characters$[characterInfo.characterIndex] = {
        firstName: characterInfo.character.firstName,
        lastName: characterInfo.character.lastName,
        alive: characterInfo.character.alive
      };
      this.characters$ = [...this.characters$];
    }
  }

  openDeveloperModal(characterId, characterIndex: number) {
    const modalRef = this.modalService.open(CharacterModalComponent);
    modalRef.componentInstance.characterId = characterId;
    modalRef.componentInstance.characterIndex = characterIndex;
  }

  ngOnDestroy() {
    this.charactersSubscription.unsubscribe();
  }
}
