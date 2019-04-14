import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {addDeveloperMutation, editDeveloperMutation} from "../graphql/mutations";
import {Query} from "../graphql/types";
import gql from "graphql-tag";
import {Observable, Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})

export class DevelopersService {

  public updateDeveloper$ = new Subject();

  constructor(private apollo: Apollo) {
  }

  getAllDevelopers(): Observable<any> {
    return this.apollo.query<Query>({
      query: gql`
        query getDevelopers {
          getDevelopers {
            firstName
            lastName
            age
          }
        }
      `,
    });
  }

  getDeveloperById(): Observable<any> {
    return this.apollo.query<Query>({
      query: gql`
        query getDeveloperById {
          getDeveloperById {
            firstName
            lastName
            age
            lovesAngular
            locationInfo {
              address
              city
              country
              postalCode
            }
          }
        }
      `,
    });
  }

  addNewDeveloper(developer: any) {
    return this.apollo.mutate({
      mutation: addDeveloperMutation,
      variables: {
        developer: developer
      }
    });
  }

  editDeveloper(developer: any) {
    return this.apollo.mutate({
      mutation: editDeveloperMutation,
      variables: {
        developer: {
          firstName: developer.firstName,
          lastName: developer.lastName,
          age: developer.age,
          lovesAngular: developer.lovesAngular,
          locationInfo: {
            address: developer.locationInfo.address,
            city: developer.locationInfo.city,
            country: developer.locationInfo.country,
            postalCode: developer.locationInfo.postalCode
          }
        }
      }
    });
  }

  deleteDeveloper() {
    return this.apollo.mutate({
      mutation: gql`
        mutation deleteDeveloperById {
          deleteDeveloper(input: 1) {
            successful
          }
        }
      `,
    })
  }

}
