import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'hola';
  public nameUpper: string = 'MUNDO';
  public fullName: string = 'hOlA munDo';

  public customDate: Date = new Date();

}
