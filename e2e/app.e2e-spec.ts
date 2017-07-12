import { ContabancariaPage } from './app.po';

describe('contabancaria App', () => {
  let page: ContabancariaPage;

  beforeEach(() => {
    page = new ContabancariaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
