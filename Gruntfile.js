module.exports = function(grunt) {
  var skinDir = 'public/';
  var appDir = 'app/';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          sassDir: skinDir + 'sass',
          cssDir: skinDir + 'css',
          environment: 'development',
          outputStyle: 'nested'
        }
      }
    },
    coffee: {
      dist: {
        options: {
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: skinDir + 'coffee/',
          src: '*.coffee',
          dest: skinDir + 'js/',
          ext: '.js'
        }]
      }
    },

    watch: {
      compass: {
        files: [
          skinDir + '/sass/{,*/}*.sass',
          skinDir + '/coffee/{,*/}*.coffee',
        ],
        tasks: ['compass', 'coffee']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', [
    'compass',
  ]);
};
