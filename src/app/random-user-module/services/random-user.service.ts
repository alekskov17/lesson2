import { Injectable } from '@angular/core';
import {IUser} from "../intarfaces/iuser";
import {Http} from "@angular/http"

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RandomUserService {

  constructor(private http: Http) { }

  private url:string = "https://randomuser.me/api/";
  public sendRequest(seed?:string):Promise<IUser>
  {
    return this.http.get(seed?this.url+`?seed=${seed}`:this.url).toPromise()
      .then(response=>  response.json().results[0])
      .catch(this.handleError);

  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
