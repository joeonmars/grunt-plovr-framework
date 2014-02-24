/*
 * grunt-plovr-framework-template
 * https://www.joeonmars.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'The project template for Grunt-Plovr-Framework';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Lets to it!';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide: http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
// exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [

    // Prompt for these values.
    init.prompt('title'),
    init.prompt('namespace'),
    init.prompt('description'),
    init.prompt('repository'),
    init.prompt('devurl'),
    init.prompt('releaseurl'),
    init.prompt('stagingurl'),
    init.prompt('liveurl'),
  ], function(err, props) {
    
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {
      noProcess: '**/*.{rb,jar,py,png,gif,jpg,ico,eot,svg,ttf,otf,woff}'
    });

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: props.namespace,
      version: '0.0.0-ignored',
      devDependencies: {
        'grunt': '~0.4.2',
        'grunt-closure-tools': '~0.9.2',
        'grunt-closure-soy': '~0.2.0',
        'grunt-contrib-compass': '~0.7.2',
        'grunt-contrib-watch': '~0.5.2',
        'grunt-open': '~0.2.3',
        'grunt-bower-task': '~0.3.4',
      },
    });

    // All done!
    done();
  });

};
