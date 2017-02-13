import { FreshfoodPage } from './app.po';

describe('freshfood App', function() {
  let page: FreshfoodPage;

  beforeEach(() => {
    page = new FreshfoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
