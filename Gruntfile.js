module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            labeler: {
                src: [
                    'lib/jquery-1.11.1.js',
                    'lib/underscore.js',
                    'js/app.js'
                ],
                dest: 'build/points.js'
            }
        },
        uglify: {
            js: {
                src: 'build/points.js',
                dest: 'build/points.min.js'
            }
        },
        watch: {
            files: ['js/*.js', 'css/*.css'],
            tasks: ['build'],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['concat', 'uglify']);
    grunt.registerTask('default', ['build']);
};
