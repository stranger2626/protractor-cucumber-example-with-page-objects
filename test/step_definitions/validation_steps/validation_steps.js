const { Then } = require('cucumber');
const PageFactory = require('../../page_objects/page_factory');
const { expect } = require('chai');

const pageFactory = new PageFactory();

Then(/^Count of "([^"]*)" should be equal "([^"]*)"$/, async function(elementName, count) {
  const expectedCount = parseInt(count, 10);
  const page = await pageFactory.getPage();
  const countOfElements = await page.getElement(elementName).getCount();
  expect(countOfElements).to.be.equal(expectedCount);
});
