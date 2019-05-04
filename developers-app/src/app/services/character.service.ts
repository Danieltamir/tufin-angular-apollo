import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {
  addCharacterMutation,
  deleteCharacterMutation,
  editCharacterMutation,
  killCharacterMutation
} from "../graphql/mutations";
import {Observable, Subject} from "rxjs/index";
import {getAllCharactersQuery, getCharacterByIdQuery} from "../graphql/queries";

@Injectable({
  providedIn: 'root'
})

export class CharacterService {

  public updateCharacter$ = new Subject();

  constructor(private apollo: Apollo) {}

  /**Below you will find the characters queries**/
  /**==========================================**/

  getAllCharacters(): Observable<any> {
    return this.apollo.query({
      query: getAllCharactersQuery
    });
  }

  getCharacterById(characterId): Observable<any> {
    return this.apollo.query({
      query: getCharacterByIdQuery,
      variables: {characterId: characterId}
    });
  }

  /**Below you will find the characters mutations**/
  /**==========================================**/

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

  deleteCharacter(characterId) {
    return this.apollo.mutate({
      mutation: deleteCharacterMutation,
      variables: {
          characterId: characterId
      }
    })
  }

  killCharacter(characterId) {
    return this.apollo.mutate({
      mutation: killCharacterMutation,
      variables: {
        characterId: characterId
      }
    })
  }

}
