module.exports = function(grunt) {
  grunt.initConfig({
    dirs:{
      stylesheets:'../../app/assets/stylesheets/'
    },
      sass: {
          options: {
              sourceMap: false
          },
          dist: {
              files: {
                  'test.css': 'test.scss'
              }
          }
      }
  });

  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);
};
