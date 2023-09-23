const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function addProxyMiddleware(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.divar.ir/v8',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // rewrite path
      },
    })
  );};

//   app.use(
//     '/apiDetails/:id',
//     createProxyMiddleware({
//       target: function(req) {
//         return 'https://api.divar.ir/v8/posts-v2/web/' + req.params.id;
//       },
//       changeOrigin: true,
//       pathRewrite: {
//         '^/apiDetails': '', // rewrite path
//       },
//     })
//   );
// };