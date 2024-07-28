const path = require('path');

module.exports = {
  // Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,

  // Specify asset prefix for correct path handling in the exported version
  assetPrefix: './',

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
