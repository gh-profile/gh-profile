import { NO_ERRORS_SCHEMA, } from '@angular/core'
import {
  async,
  TestBed,
  ComponentFixture,
} from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { NavbarComponent, } from './navbar.component'

describe(`NavbarComponent`, () => {
  let comp: NavbarComponent
  let fixture: ComponentFixture<NavbarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent, ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent)
    comp = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should have link for home', () => {
    const el = fixture
      .debugElement
      .query(By.css('.app-navbar > a:nth-child(1) > span'))
      .nativeElement

    expect(el.textContent).toEqual('Github Profile')
  })

  it('should have link for profile', () => {
    const el = fixture
      .debugElement
      .query(By.css('.app-navbar > a:nth-child(2)'))
      .nativeElement

    expect(el.textContent).toEqual('Profile')
  })

  it('should have link for registry', () => {
    const el = fixture
      .debugElement
      .query(By.css('.app-navbar > a:nth-child(3)'))
      .nativeElement

    expect(el.textContent).toEqual('Registry')
  })
})
