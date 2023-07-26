const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/graphql",
    createProxyMiddleware({
      target: "https://4177-grp25-a3.netlify.app",
      changeOrigin: true,
    })
  );
};
