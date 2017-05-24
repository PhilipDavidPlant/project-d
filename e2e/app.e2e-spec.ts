import { DrinxPage } from './app.po';

describe('drinx App', () => {
  let page: DrinxPage;

  beforeEach(() => {
    page = new DrinxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
