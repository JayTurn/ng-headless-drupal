/**
 * headlessDrupal Gruntfile.
 */
'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically.
  require('load-grunt-tasks')(grunt);

  // Track how long grunt tasks are taking in order to optimize builds.
  require('time-grunt')(grunt);

  // Initialize the grunt config tasks.
  grunt.initConfig({
    // Define Settings files to be imported.
    localEnv: grunt.file.readJSON('./config/local.settings.json'),
    devEnv: grunt.file.readJSON('config/dev.settings.json'),
    prodEnv: grunt.file.readJSON('config/prod.settings.json'),

    // Define constants to be set per environment Angular.
    ngconstant: {
      options: {
        space: '  ',
        wrap: '"use strict";\n\n {%= __ngModule %}',
        name: 'config',
      },
      local: '<%= localEnv.ngConstant %>',
      dev: '<%= devEnv.ngConstant %>',
      prod: '<%= prodEnv.ngConstant %>',
    },

    watch: {
      js: {
        files: ['app/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      compass: {
        dev: {
          options: {
            environment: 'development'
          }
        },
        dist: {
          options: {
            environment: 'production'
          }
        },
        files: ['app/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:local']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          'app/views/{,*//*}*.{html}',
          '{app/.tmp,app}/styles/{,*//*}*.css',
          '{app/.tmp,app}/scripts/{,*//*}*.js',
          'app/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}',
        ],
        options: {
          livereload: true
        }
      }
    },

    // Adding jshint checking to ensure code standards are met.
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'app/scripts/{,*/}*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Clean folders for distributed builds.
    clean: {
      //options: {
        //'no-write': true
      //},
      dist: {
        files: [{
          dot: true,
          src: [
            '/app/.tmp',
            'dist/*',
            '!/.git*',
            '!/Procfile'
          ]
        }]
      },
      local: {
        files: [{
          dot: true,
          src: [
            '/app/.tmp',
            '/app/config.js'
          ]
        }],
      }
    },

    // Compile sass and css into tmp directory for development and dist 
    // directory for production code.
    compass: {
      options: {
        sassDir: 'app/styles',
        cssDir: 'app/.tmp/styles',
        generatedImagesDir: 'app/.tmp/images/generated',
        imagesDir: 'app/images',
        javascriptsDir: 'app/scripts',
        fontsDir: 'app/styles/fonts',
        importPath: 'app/bower_components',
        httpImagesPath: 'app/images',
        httpGeneratedImagesPath: 'dist/public/images/generated',
        httpFontsPath: 'app/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n',
        bundleExec: true,
        require: ['breakpoint', 'singularitygs', 'sass-globbing']
      },
      dist: {
        options: {
          generatedImagesDir: 'dist/public/images'
        }
      },
      local: {
        options: {
          debugInfo: true
        }
      }
    },

    // Concatenate the files included via requirejs for optimisation.
    requirejs: {
      compile: {
        options: {
          baseUrl: './app',
          mainConfigFile: './app/build/boot.js',
          out: './dist/public/scripts/main.js',
          name: 'build/boot',
          paths: {
            requireLib: 'bower_components/requirejs/require'
          },
          include: ['requireLib'],
          optimize: 'uglify',
          //optimize: 'none',
          findNestedDependencies: true,
          uglify: {
            no_mangle: true,
          }
        }
      }
    },

    // Rename files for cache busting purposes.
    rev: {
      dist: {
        files: {
          src: [
            'dist/public/scripts/{,*/}*.js',
            'dist/public/styles/{,*/}*.css',
            'dist/public/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            'dist/public/styles/fonts/*'
          ]
        }
      }
    },

    // Reads HTML usemin blocks and automatically concatinates, minifies and
    // revisions files.
    useminPrepare: {
      html: ['app/index.html'],
      options: {
        dest: 'dist/public'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['dist/public/index.html'],
      //css: ['dist/public/styles/*.css'],
      options: {
        assetsDirs: ['dist/public']
      }
    },

    // Minify image files and create them in the dist folder.
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/images',
          src: ['**/*.jpg'],
          dest: 'dist/public/images'
        }]
      }
    },

    // Minify SVG image files.
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/images',
          src: '**/*.svg',
          dest: 'dist/public/images'
        }]
      }
    },

    // Minify html files.
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          //collapseBooleanAttributes: true,
          //removeCommentsFromCDATA: true,
          //removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: 'app/views',
          src: ['*.html', 'partials/**/*.html'],
          dest: 'dist/views'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/.tmp/concat/scripts',
          src: '*.js',
          dest: 'app/.tmp/concat/scripts'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'app',
          dest: 'dist/public',
          src: [
            '*.{ico,png,txt}',
            'index.html',
            '.htaccess',
            'bower_components/**/*',
            'images/**/*.{webp}',
            'fonts/**/*'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: 'app/views',
          dest: 'dist/public/views',
          src: [
            '**/*.html',
          ]
        }, {
          expand: true,
          cwd: 'app/.tmp/images',
          dest: 'dist/public/images',
          src: ['*']
        }]
      },
      styles: {
        expand: true,
        cwd: 'app/styles',
        dest: 'app/.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run concurrent tasks to speed up the grunt build processes.
    concurrent: {
      local: [
        'compass:local',
        'ngconstant:local'
      ],
      test: [
        'compass',
        'ngconstant:local'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },

    // CSS minification of distribution css files.
    cssmin: {
      dist: {
        files: {
          'dist/public/styles/main.styles.css': [
            'app/.tmp/styles/{,*/}*.css',
            'app/styles/{,*/}*.css'
          ]
        }
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: false
      }
    }

  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build']);
    }

    grunt.task.run([
      'clean:local',
      //'ngconstant:local',
      'concurrent:local',
      'watch',
    ]);
  });

  grunt.registerTask('test', function() {
    grunt.task.run([
      'clean:local',
      'ngconstant:local',
      'concurrent:test',
      'karma'
    ]);
  });  

  grunt.registerTask('build', [
    'clean:dist',
    'ngconstant:prod',
    'copy:dist',
    'useminPrepare',
    'concurrent:dist',
    //'concat',
    //'ngmin',
    //'cdnify',
    'cssmin',
    //'rev',
    //'uglify',
    'requirejs',
    'usemin',
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};

