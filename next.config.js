// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/my-blog' : '',
  assetPrefix: isProd ? '/my-blog/' : '',
};
