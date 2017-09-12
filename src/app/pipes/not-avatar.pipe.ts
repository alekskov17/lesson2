import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notAvatar'
})
export class NotAvatarPipe implements PipeTransform {

  private notAvatar: string = "/assets/man.png";
  transform(value: any = false): any {

    if(!value)
    {
      return this.notAvatar;
    }
    return value;
  }

}
