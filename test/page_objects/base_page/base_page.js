const { logger } = require('../../config/logger_config');
const Element = require('../base_elements/base_element');
const Collection = require('../base_elements/base_collection');

class BasePage {
  constructor(pageName, pageUrl) {
    this.pageName = pageName;
    this.pageUrl = pageUrl;
    this.pageElements = [
      new Element('Contact Us Button', '.cta-button-ui'),
      new Collection('Navigation Links', '.top-navigation__item-link')
    ];
  };

  getElement(targetElementName) {
    const targetElement = this.pageElements.find(element => element.name === targetElementName);
    if (targetElement) {
      return targetElement;
    } else {
      throw new Error(`No element with [${this.targetElementName}] name found on [${this.pageName}] page`);
    }
  };

  wait(waitTimeInMilliseconds) {
    logger.debug(`Waiting [${waitTimeInMilliseconds}] milliseconds`);
    return browser.sleep(waitTimeInMilliseconds);
  };

  async getCurrentUrl() {
    const currentUrl = await browser.getCurrentUrl();
    logger.debug(`Current url is [${currentUrl}]`);
    return currentUrl;
  };

  openUrl(url) {
    logger.debug(`Opening [${url}] url`);
    return browser.get(url);
  };

  open() {
    logger.debug(`Opening [${this.pageUrl}] url`);
    return browser.get(this.pageUrl);
  };
};

module.exports = BasePage;
