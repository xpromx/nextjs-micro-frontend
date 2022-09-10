const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/web-a",
        destination: "http://localhost:3001/web-a",
      },
      {
        source: "/web-a/:path*",
        destination: "http://localhost:3001/web-a/:path*",
      },

      {
        source: "/web-b",
        destination: "http://localhost:3002/web-b",
      },
      {
        source: "/web-b/:path*",
        destination: "http://localhost:3002/web-b/:path*",
      },
    ];
  },
});
