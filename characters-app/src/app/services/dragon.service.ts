import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs/index";
import {getAllDragonsQuery} from "../graphql/queries";

@Injectable({
  providedIn: 'root'
})

export class DragonService {

  constructor(private apollo: Apollo) {
  }

  getAllDragons(): Observable<any> {
    return this.apollo.query({
      query: getAllDragonsQuery
    });
  }
}
