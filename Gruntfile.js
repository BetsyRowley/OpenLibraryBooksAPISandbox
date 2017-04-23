module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify', 'copy', 'watch']);

};
