import { Component, Input, OnInit, } from '@angular/core'

@Component({
  selector: 'lang-progress',
  styleUrls: [ './lang-progress.component.css' ],
  templateUrl: './lang-progress.component.html',
})
export class LangProgressComponent {
  @Input() public name: string
  @Input() public color: string
  @Input() public percent: string
}
