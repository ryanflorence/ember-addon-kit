var glob = require('glob');
var path = require('path');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  loadProjectTasks(grunt);
  grunt.initConfig(loadProjectConfig());
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', [
                       'clean:build',
                       'copy:vendor',
                       'copy:html',
                       'transpile',
                       'emberTemplates',
                       'emberMain']);
  grunt.registerTask('dev', [
                       'bowerImport',
                       'build',
                       'connect:server',
                       'watch']);
};

function loadProjectTasks(grunt) {
  glob.sync('./tasks/*.js').forEach(function(taskFile) {
    require(taskFile)(grunt);
  });
}

function loadProjectConfig(grunt) {
  return glob.sync('./tasks/config/*.js').reduce(function(config, configFile) {
    var name = path.basename(configFile).replace(/\.js$/, '');
    config[name] = require(configFile);
    return config;
  }, {});
}

