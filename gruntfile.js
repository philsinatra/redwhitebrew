module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; */\n'
      },    // options
      myTarget: {
        files: {
          'build/js/scripts.js': [
                                'src/js/vendor/*',
                                'src/js/*.js'
                                ]
        }   // files
      }     // myTarget
    },      // uglify
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }   // options
      }     // dev
    },      // compass
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      },     // scripts
      sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['compass:dev']
      },    // sass
      html: {
        files: ['build/*.html']
      }
    }       // watch
  });       // initConfig

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task
  grunt.registerTask('default','watch');
};          // exports