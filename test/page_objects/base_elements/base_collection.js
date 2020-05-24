const { logger } = require('../../config/logger_config');

class Collection {
  constructor(collectionName, selector, elementChildren = []) {
    this.collection = element.all(by.css(selector));
    this.name = collectionName;
    this.children = elementChildren;
  };

  async getCount() {
    const collectionCount = await this.collection.count();
    logger.debug(`Count of "${this.name}" is "${collectionCount}"`);
    return collectionCount;
  };

  async getText() {
    const arrayOfCollectionTexts = await this.collection.getText();
    logger.debug(`Texts of "${this.name}" are [${arrayOfCollectionTexts}]`);
    if (arrayOfCollectionTexts.length !== 0) {
      return arrayOfCollectionTexts;
    } else {
      throw new Error(`No texts found in [${this.name}]`);
    }
  };

  async getElementIndexByText(text) {
    const arrayOfCollectionTexts = await this.getText();
    const matchingTextIndex = arrayOfCollectionTexts.indexOf(text);
    if (matchingTextIndex !== -1) {
      logger.debug(`Element with [${text}] text index is [${matchingTextIndex}]`);
      return matchingTextIndex;
    } else {
      throw new Error(`No element with "${text}" text found in [${arrayOfCollectionTexts}]`);
    }
  };

  async clickElementByText(text) {
    const indexOfElementToClick = await this.getElementIndexByText(text);
    logger.debug(`Clicking [${this.name}] element with [${indexOfElementToClick}] index`)
    return this.collection.get(indexOfElementToClick).click();
  };
};

module.exports = Collection;
