module.exports = {
  app: {
    options: {
      templateBasePath: 'example/app/templates/',
      amd: true
    },
    files: {
      "build/app/app-templates.js": "example/app/templates/**/*.hbs"
    }
  }
};

