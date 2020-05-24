const { logger } = require('../../config/logger_config');

class BasePage {
  constructor() {
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
};

module.exports = BasePage;
