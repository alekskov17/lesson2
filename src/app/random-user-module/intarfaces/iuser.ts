 interface Name {
  title: string;
  first: string;
  last: string;
}
 interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
export interface IUser{
  name: Name;
  email:string;
  phone:string;
  dob:string,
  picture: Picture;
}
