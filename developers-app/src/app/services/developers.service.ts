import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {addDeveloperMutation, editDeveloperMutation} from "../mutations";
import {Query} from "../types";
import gql from "graphql-tag";

@Injectable({
    providedIn: 'root'
})
export class DevelopersService {

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

    // getDeveloperById(developer: any) {
    //     this.apollo.query<Query>({
    //         query: gql`
    //             query getDeveloperById {
    //                 getDeveloperById {
    //                     firstName
    //                     lastName
    //                     age
    //                 }
    //             }
    //         `,
    //     }).subscribe(result => {
    //         this.developers = result.data.getDevelopers
    //     })
    // }

    editDeveloper(developer: any) {
        return this.apollo.mutate({
            mutation: editDeveloperMutation,
            variables: {
                developer: developer
            }
        });
    }

    deleteDeveloper(developerIndex: number) {

    }
}
