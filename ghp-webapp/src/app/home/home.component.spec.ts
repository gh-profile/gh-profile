import { NO_ERRORS_SCHEMA } from '@angular/core'
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing'
import { Component } from '@angular/core'
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http'
import { MockBackend } from '@angular/http/testing'

import { HomeComponent } from './home.component'

describe(`HomeComponent`, () => {
  let comp: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions)
          },
          deps: [MockBackend, BaseRequestOptions]
        },
      ]
    })
    .compileComponents() // compile template and css
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    comp = fixture.componentInstance

    fixture.detectChanges() // trigger initial data binding
  })

  it('home spec', () => {
    console.log(2)
  })
})
