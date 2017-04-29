import { NgModule, } from '@angular/core'
import { RouterModule, } from '@angular/router'
import { MaterialModule, } from '@angular/material'

import { NavbarComponent, } from './navbar/navbar.component'
import { FooterComponent, } from './footer/footer.component'

@NgModule({
  imports: [
    RouterModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ],
  entryComponents: [ ],
})
export class SharedModule {}
