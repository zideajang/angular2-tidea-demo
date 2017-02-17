import { Angular2TideaDemoPage } from './app.po';

describe('angular2-tidea-demo App', function() {
  let page: Angular2TideaDemoPage;

  beforeEach(() => {
    page = new Angular2TideaDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
