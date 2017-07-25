import { AgularAppPage } from './app.po';

describe('agular-app App', function() {
  let page: AgularAppPage;

  beforeEach(() => {
    page = new AgularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
