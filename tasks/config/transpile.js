// must come after copy
module.exports = {
  addon: {
    anonymous: true,
    type: 'amd',
    files: [
      {
        expand: true,
        cwd: '.',
        src: ['main.js', 'lib/**/*.js'],
        dest: '.build/addon'
      }
    ]
  },

  app: {
    anonymous: true,
    type: 'amd',
    files: [
      {
        expand: true,
        cwd: 'example/',
        src: ['**/*.js'],
        dest: '.build'
      }
    ]
  }
};

