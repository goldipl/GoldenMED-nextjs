const path = require('path');

module.exports = {
  // Static HTML export to `out/` (deployed to GitHub Pages)
  output: 'export',

  // Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,

  // basePath for GitHub Pages is injected by actions/configure-pages in CI.
  // A relative assetPrefix ('./') breaks assets on nested routes like /oferta/laseroterapia/.

  images: {
    unoptimized: true,
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
