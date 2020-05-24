const { logger } = require('../../config/logger_config');

class Collection {
  constructor(collectionName, selector) {
    this.collection = element.all(by.css(selector));
    this.collectionName = collectionName;
  };

  async getCount() {
    const collectionCount = await this.collection.count();
    logger.debug(`Count of "${this.collectionName}" is "${collectionCount}"`);
    return collectionCount;
  };

  async getText() {
    const arrayOfCollectionTexts = await this.collection.getText();
    logger.debug(`Texts of "${this.collectionName}" are [${arrayOfCollectionTexts}]`);
    if (arrayOfCollectionTexts.length !== 0) {
      return arrayOfCollectionTexts;
    } else {
      throw new Error(`No texts found in [${this.collectionName}]`);
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
    logger.debug(`Clicking [${this.collectionName}] element with [${indexOfElementToClick}] index`)
    return this.collection.get(indexOfElementToClick).click();
  };
};

module.exports = Collection;
