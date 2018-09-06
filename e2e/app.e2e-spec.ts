import { SnapcheckSampleAppPage } from './app.po';

describe('snapcheck-sample-app App', () => {
  let page: SnapcheckSampleAppPage;

  beforeEach(() => {
    page = new SnapcheckSampleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
