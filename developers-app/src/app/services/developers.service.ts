import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {addDeveloperMutation, editDeveloperMutation} from "../mutations";
import {Query} from "../types";
import gql from "graphql-tag";
import {Observable, Subject} from "rxjs/index";

@Injectable({
    providedIn: 'root'
})
export class DevelopersService {

    public updateDeveloper$ = new Subject();

    constructor(private apollo: Apollo) {
    }

    addNewDeveloper(developer: any) {
        return this.apollo.mutate({
            mutation: addDeveloperMutation,
            variables: {
                developer: developer
            }
        });
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

    editDeveloper(developer: any) {
        return this.apollo.mutate({
            mutation: editDeveloperMutation,
            variables: {
                developer: developer
            }
        });
    }

    deleteDeveloper(developerIndex: number) {
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
