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

    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: '/',
          src: ['app/scripts/**/*.js', 'app/build/**/*.js'],
          dest: 'dist/public/'
        }]
      }
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
      local: '/app/.tmp'
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
      html: ['app/views/index.html'],
      options: {
        dest: 'dist/public'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['dist/views/{,*/}*.html'],
      css: ['dist/public/styles/{,*/}*.css'],
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
        }, {
          expand: true,
          dest: 'dist',
          src: [
            'package.json'
          ]
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
        'compass:local'
      ],
      test: [
        'compass'
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
       configFile: 'karma.conf.js',
       singleRun: true
     }
   },

  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build']);
    }

    grunt.task.run([
      'clean:local',
      //'concurrent:local',
      'watch',
    ]);
  });

  grunt.registerTask('test', function() {
    grunt.task.run([
      'clean:local',
      'concurrent:test',
      'karma'
    ]);
  });  

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    //'concat',
    //'ngmin',
    'copy:dist',
    //'cdnify',
    'cssmin',
    //'rev',
    //'usemin',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};

