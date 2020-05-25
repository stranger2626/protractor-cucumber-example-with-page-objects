const { When } = require('cucumber');
const PageFactory = require('../../page_objects/page_factory');

const pageFactory = new PageFactory();

When(/^I wait "([^"]*)" seconds$/, async function(waitTime) {
  const page = await pageFactory.getPage();
  return page.wait(waitTime * 1000);
});

When(/^I open "([^"]*)" page$/, async function(pageName) {
  const page = await pageFactory.getPage(pageName);
  return page.open();
});
