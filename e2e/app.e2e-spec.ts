import { ElectronAngularTutorialPage } from './app.po';

describe('electron-angular-tutorial App', () => {
  let page: ElectronAngularTutorialPage;

  beforeEach(() => {
    page = new ElectronAngularTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
