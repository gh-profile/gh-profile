import { browser, by, element } from 'protractor'

describe('App', () => {

  beforeEach(() => {
    browser.get('/')
  })

  it('should have a title', () => {
    let subject = browser.getTitle()
    let result  = 'gh-profile'
    expect<any>(subject).toEqual(result)
  })

  it('should have header', () => {
    let subject = element(by.css('h1')).isPresent()
    let result  = true
    expect<any>(subject).toEqual(result)
  })

  it('should have <home>', () => {
    let subject = element(by.css('app home')).isPresent()
    let result  = true
    expect<any>(subject).toEqual(result)
  })

  it('should have buttons', () => {
    let subject = element(by.css('button')).getText()
    let result  = 'Submit Value'
    expect<any>(subject).toEqual(result)
  })

})
