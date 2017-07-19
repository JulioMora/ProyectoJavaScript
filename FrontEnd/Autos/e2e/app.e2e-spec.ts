import { AutosPage } from './app.po';

describe('autos App', () => {
  let page: AutosPage;

  beforeEach(() => {
    page = new AutosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
