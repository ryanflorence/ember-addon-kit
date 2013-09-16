module.exports = {
  vendor: {
    files: [
      {
        expand: true,
        cwd: './bower_components/',
        src: '**/*.js',
        dest: '.build/bower_components'
      }
    ]
  },
  html: {
    files: [
      {
        src: 'example/index.html',
        dest: '.build/index.html'
      }
    ]
  }
};

