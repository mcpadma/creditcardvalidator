import { CreditcardvalidatorPage } from './app.po';

describe('creditcardvalidator App', () => {
  let page: CreditcardvalidatorPage;

  beforeEach(() => {
    page = new CreditcardvalidatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
