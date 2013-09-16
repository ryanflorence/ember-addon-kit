var options = { livereload: true };

module.exports = {
  templates: {
    options: options,
    files: ['lib/**/*.hbs', 'example/**/*.hbs'],
    tasks: ['emberTemplates']
  },
  js: {
    options: options,
    files: ['main.js', 'lib/**/*.js', 'example/**/*.js'],
    tasks: ['transpile']
  },
  bower: {
    options: options,
    files: ['bower.json'],
    tasks: ['bower', 'build']
  },
  html: {
    options: options,
    files: 'example/index.html',
    tasks: ['copy:html']
  }
};

