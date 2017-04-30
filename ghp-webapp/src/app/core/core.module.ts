import { NgModule, } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, } from '@angular/router'

import { MaterialModule, } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

import { NavbarComponent, } from './navbar/navbar.component'
import { FooterComponent, } from './footer/footer.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
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
export class CoreModule {}
