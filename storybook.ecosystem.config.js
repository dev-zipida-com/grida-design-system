module.exports = {
  name: 'grida',
  script: 'serve',
  watch: true,
  env: {
    PM2_SERVE_PATH: 'storybook-static',
    PM2_SERVE_PORT: 6006,
    PM2_SERVE_SPA: 'true',
    PM2_SERVE_HOMEPAGE: '/index.html',
  },
}
