import { Injectable } from '@angular/core';
import {IUser} from "../intarfaces/iuser";

@Injectable()
export class RandomUserService {

  constructor() { }

  private url:string = "https://randomuser.me/api/";
  public sendRequest(seed?:string):Promise<IUser>
  {
    return fetch(seed?this.url+`?seed=${seed}`:this.url)
      .then((response)=>{
        return response.json()
          .then((data:{results:IUser})=>{
            return data.results[0];
          })
      });
  }


}
