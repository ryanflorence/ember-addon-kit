module.exports = {
  options: {
    configFile: 'karma.conf.js',
    browsers: ['Chrome']
  },

  single: {
    browsers: ['Chrome', 'Firefox'],
    singleRun: true
  },

  dev: {
    // can't get this to report :\
    background: true
  },

  watch: {
    autoWatch: true
  }

};

