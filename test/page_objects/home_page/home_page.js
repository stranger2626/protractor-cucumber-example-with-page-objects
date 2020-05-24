const BasePage = require('../base_page.js/base_page');

class HomePage extends BasePage {
  constructor() {
    super('Home', 'https://www.epam.com/');
  };
};

module.exports = HomePage;
