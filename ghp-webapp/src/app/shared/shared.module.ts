import { NgModule, } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, } from '@angular/router'

import { MaterialModule, } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
  ],
  declarations: [ ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  entryComponents: [ ],
})
export class SharedModule {}
