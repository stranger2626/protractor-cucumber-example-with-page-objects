const { logger } = require('../../config/logger_config');

class Element {
  constructor(elementName, selector) {
    this.element = element(by.css(selector));
    this.elementName = elementName;
  };

  click() {
    logger.debug(`Clicking "${this.elementName}"`);
    return this.element.click();
  };

  async getText() {
    const elementText = await this.element.getText();
    logger.debug(`"${this.elementName}" element text is [${elementText}]`);
    return elementText;
  };
};

module.exports = Element;
