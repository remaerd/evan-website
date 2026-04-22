const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  base: '/evan-website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        business: resolve(__dirname, 'business.html'),
        commitment: resolve(__dirname, 'commitment.html'),
        selfHelp: resolve(__dirname, 'self-help.html'),
        contactUs: resolve(__dirname, 'contact-us.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        whitepaper: resolve(__dirname, 'whitepaper.html')
      }
    }
  }
});
