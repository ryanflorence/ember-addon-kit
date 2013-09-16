// must come after copy
module.exports = {
  app: {
    anonymous: true,
    type: 'amd',
    files: [
      {
        expand: true,
        cwd: 'example/',
        src: ['**/*.js'],
        dest: 'build'
      }
    ]
  }
};

