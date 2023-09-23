const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function addProxyMiddleware(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.divar.ir/v8",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // rewrite path
      },
    })
  );
};
