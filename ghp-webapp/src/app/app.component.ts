import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core'
import { AppState } from './app.service'

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.component.css' ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public name = 'gh-profile:webapp'
  public url = 'https://github.com/gh-profile/gh-profile'

  constructor(public appState: AppState) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state)
  }
}
