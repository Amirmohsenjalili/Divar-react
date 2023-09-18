const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function addProxyMiddleware(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.divar.ir/v8/web-search/1/ROOT',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // rewrite path
      },
    })
  );
  app.use(
    '/apiDetails',
    createProxyMiddleware({
      target: 'https://api.divar.ir/v8/posts-v2/web/AZvb19Or',
      changeOrigin: true,
      pathRewrite: {
        '^/apiDetails': '', // rewrite path
      },
    })
  );
};