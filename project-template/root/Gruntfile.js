'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    plovr_extended: {
      options: {
        "id": "{%= namespace %}",
        "paths": ["source/assets/js", "source/assets/soy"],
        "inputs": "source/assets/js/{%= namespace %}.js",
        "mode": "ADVANCED",
        "level": "QUIET"
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      },
    },

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-plovr-extended');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('connect-livereload');

  // Default task.
  grunt.registerTask('default', ['plovr_extende']);

};
