import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { NoContentComponent } from './core/no-content/no-content.component'

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: '**',    component: NoContentComponent },
]
