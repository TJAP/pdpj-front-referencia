import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    // return browser.get(browser.baseUrl) as Promise<any>;
    return browser.get('/dashboard');
  }

  getTitleText() {
    // return element(by.css('app-root h1')).getText() as Promise<string>;
    // return element(by.tagName('head')).getText() as Promise<string>;
    return browser.getTitle() as Promise<string>;
  }
}
