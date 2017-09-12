import { Component } from '@angular/core';
export interface Name {
  title: string;
  first: string;
  last: string;
}
export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
interface IUser{
  name: Name;
  email:string;
  phone:string;
  dob:string,
  picture: Picture;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


}

