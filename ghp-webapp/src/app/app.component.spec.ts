import { NO_ERRORS_SCHEMA } from '@angular/core'
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing'

import { AppComponent } from './app.component'
import { AppState } from './app.service'

describe(`AppComponent`, () => {
  let comp: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AppState]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    comp = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined()
    expect(comp).toBeDefined()
  })

  it(`should have name`, () => {
    expect(comp.name).toEqual('gh-profile:webapp')
  })

  it('should log ngOnInit', () => {
    spyOn(console, 'log')
    expect(console.log).not.toHaveBeenCalled()

    comp.ngOnInit()
    expect(console.log).toHaveBeenCalled()
  })
})
