const { logger } = require('../../config/logger_config');
const Element = require('../base_elements/base_element');
const Collection = require('../base_elements/base_collection');

class BasePage {
  constructor(pageAlias, pageUrl) {
    this.pageAlias = pageAlias;
    this.pageUrl = pageUrl;
    this.pageElements = [
      new Element('Contact Us Button', '.cta-button-ui')
    ];
  };

  wait(waitTimeInMilliseconds) {
    logger.debug(`Waiting [${waitTimeInMilliseconds}] milliseconds`);
    return browser.sleep();
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
