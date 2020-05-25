const HomePage = require('./home_page/home_page');

class PageFactory {
  constructor() {
    this.listOfPages = [new HomePage()];
  };

  async getPage(pageName) {
    if (pageName) {
      const targetPage = this.listOfPages.find(page => page.pageName === pageName);
      if (targetPage) {
        return targetPage;
      } else {
        const arrayOfPages = this.listOfPages.map(page => page.pageName);
        throw new Error(`No page with [${pageName}] found in pages array [${arrayOfPages}]`);
      }
    } else {
      const currentUrl = await browser.getCurrentUrl();
      const targetPage = this.listOfPages.find(page => page.pageUrl === currentUrl);
      if (targetPage) {
        return targetPage;
      } else {
        const arrayOfPagesUrls = this.listOfPages.map(page => page.pageUrl);
        throw new Error(`No page with [${currentUrl}] url found in pages array [${arrayOfPagesUrls}]`);
      }
    }
  }
};

module.exports = PageFactory;
