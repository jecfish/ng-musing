import { NgMusingPage } from './app.po';

describe('ng-musing App', function() {
  let page: NgMusingPage;

  beforeEach(() => {
    page = new NgMusingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
