import { PruebasGitHubPage } from './app.po';

describe('pruebas-git-hub App', () => {
  let page: PruebasGitHubPage;

  beforeEach(() => {
    page = new PruebasGitHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
