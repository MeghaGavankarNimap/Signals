import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang',
  standalone: true,
  imports: [],
  templateUrl: './lang.component.html',
  styleUrl: './lang.component.scss'
})
export class LangComponent {
  constructor(public translate:TranslateService){}
  myfun(event:Event){
    const finalval=(event.target as HTMLSelectElement).value
    this.translate.use(finalval)

  }

}
