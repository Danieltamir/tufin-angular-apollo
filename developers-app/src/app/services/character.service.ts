import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {
  addCharacterMutation,
  deleteCharacterMutation,
  editCharacterMutation,
  killCharacterMutation
} from "../graphql/mutations";
import {Observable, Subject} from "rxjs/index";
import {getAllCharactersQuery, getCharacterByNameQuery} from "../graphql/queries";

@Injectable({
  providedIn: 'root'
})

export class CharacterService {

  public updateCharacter$ = new Subject();

  constructor(private apollo: Apollo) {
  }

  getAllCharacters(): Observable<any> {
    return this.apollo.query({
      query: getAllCharactersQuery
    });
  }

  getCharacterByName(): Observable<any> {
    return this.apollo.query({
      query: getCharacterByNameQuery()
    });
  }

  addNewCharacter(character: any) {
    return this.apollo.mutate({
      mutation: addCharacterMutation,
      variables: {
        character: character
      }
    });
  }

  editCharacter(character: any) {
    return this.apollo.mutate({
      mutation: editCharacterMutation,
      variables: {
        character: {
          firstName: character.firstName,
          lastName: character.lastName,
          age: character.age,
          alive: character.alive,
          locationInfo: {
            address: character.locationInfo.address,
            city: character.locationInfo.city,
            country: character.locationInfo.country,
            postalCode: character.locationInfo.postalCode
          }
        }
      }
    });
  }

  deleteCharacterByName(character) {
    return this.apollo.mutate({
      mutation: deleteCharacterMutation,
      variables: {
        character: {
          firstName: character.firstName,
          lastName: character.lastName,
        }
      }
    })
  }

  killCharacterByName(character) {
    return this.apollo.mutate({
      mutation: killCharacterMutation,
      variables: {
        character: {
          firstName: character.firstName,
          lastName: character.lastName,
          alive: character.alive,
        }
      }
    })
  }

}
