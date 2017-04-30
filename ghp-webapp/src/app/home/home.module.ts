import { NgModule, } from '@angular/core'
import { SharedModule, } from '../shared/shared.module'

import { HomeComponent, } from './home.component'
import { LanguageTabComponent } from './tabs/language-tab.component'
import { RepositoryTabComponent } from './tabs/repository-tab.component'
import { ContributionTabComponent } from './tabs/contribution-tab.component'
import { LangProgressComponent } from './lang/lang-progress.component'

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    LangProgressComponent,
    LanguageTabComponent,
    RepositoryTabComponent,
    ContributionTabComponent,
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  entryComponents: [ ],
})
export class HomeModule {}
