const { logger } = require('../../config/logger_config');

class Element {
  constructor(elementName, selector, arrayOfChildElements = []) {
    this.element = element(by.css(selector));
    this.name = elementName;
    this.children = arrayOfChildElements;
  };

  click() {
    logger.debug(`Clicking "${this.name}"`);
    return this.element.click();
  };

  async getText() {
    const elementText = await this.element.getText();
    logger.debug(`"${this.name}" element text is [${elementText}]`);
    return elementText;
  };
};

module.exports = Element;
