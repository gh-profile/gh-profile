import { browser, by, element } from 'protractor'

describe('AppComponent e2e', () => {
  beforeEach(() => {
    browser.get('/')
  })

  it('should have a title', () => {
    let subject = browser.getTitle()
    expect(subject).toEqual('gh-profile')
  })

  it('should have main', () => {
    let subject = element(by.css('main')).isPresent()
    expect(subject).toEqual(true)
  })

  it('should have navbar', () => {
    let subject = element(by.css('app-navbar')).isPresent()
    expect(subject).toEqual(true)
  })

  it('should have footer', () => {
    let subject = element(by.css('app-footer')).isPresent()
    expect(subject).toEqual(true)
  })
})
