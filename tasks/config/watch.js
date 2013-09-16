module.exports = {
  templates: {
    options: {
      livereload: true
    },
    files: ['example/**/*.hbs'],
    tasks: ['emberTemplates']
  },
  js: {
    options: {
      livereload: true
    },
    files: ['example/**/*.js'],
    tasks: ['transpile']
  },
  bower: {
    files: ['bower.json'],
    tasks: ['bower', 'build']
  },
  html: {
    files: 'example/index.html',
    tasks: ['copy:html']
  }
};

