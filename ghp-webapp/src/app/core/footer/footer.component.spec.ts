import { NO_ERRORS_SCHEMA, } from '@angular/core'
import {
  async,
  TestBed,
  ComponentFixture,
} from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { FooterComponent, } from './footer.component'

describe(`FooterComponent`, () => {
  let comp: FooterComponent
  let fixture: ComponentFixture<FooterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent, ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent)
    comp = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should have link for gh-profile org', () => {
    const de = fixture.debugElement.query(By.css('.footer-copyright-text > a'))
    const el = de.nativeElement

    expect(el.href).toEqual('https://github.com/gh-profile')
  })

  it('should have link for gh-profile repo', () => {
    const de = fixture.debugElement.query(By.css('.footer-link-text > a'))
    const el = de.nativeElement

    expect(el.href).toEqual('https://github.com/gh-profile/gh-profile')
  })
})
