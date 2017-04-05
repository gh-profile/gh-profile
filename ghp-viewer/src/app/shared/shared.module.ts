import { NgModule, } from '@angular/core'
import { RouterModule, } from '@angular/router'
import { MaterialModule, } from '@angular/material'

import { NavbarComponent, } from './navbar/navbar.component'

@NgModule({
  imports: [
    RouterModule,
    MaterialModule.forRoot(),
  ],
  declarations: [ NavbarComponent, ],
  exports: [ NavbarComponent, ],
  entryComponents: [ ],
})
export class SharedModule {}
