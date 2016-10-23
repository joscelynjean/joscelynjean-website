import { JoscelynjeanWebsitePage } from './app.po';

describe('joscelynjean-website App', function() {
  let page: JoscelynjeanWebsitePage;

  beforeEach(() => {
    page = new JoscelynjeanWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
