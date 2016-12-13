<<<<<<< HEAD
'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

function runTests(singleRun, done) {
    var bowerDeps = wiredep({
        directory: 'bower_components',
        exclude: ['bootstrap-sass'],
        dependencies: true,
        devDependencies: true
    });

    var testFiles = bowerDeps.js.concat([
        'src/tests/spec/**/*.js'
    ]);

    gulp.src(testFiles)
        .pipe($.karma({
            configFile: 'karma.conf.js',
            action: (singleRun) ? 'run' : 'watch'
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
}

gulp.task('test', function (done) {
    runTests(true /* singleRun */, done)
});

gulp.task('autotest', function (done) {
    runTests(false /* singleRun */, done)
});
=======
'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

function runTests(singleRun, done) {
    var bowerDeps = wiredep({
        directory: 'bower_components',
        exclude: ['bootstrap-sass'],
        dependencies: true,
        devDependencies: true
    });

    var testFiles = bowerDeps.js.concat([
        'src/tests/spec/**/*.js'
    ]);

    gulp.src(testFiles)
        .pipe($.karma({
            configFile: 'karma.conf.js',
            action: (singleRun) ? 'run' : 'watch'
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
}

gulp.task('test', function (done) {
    runTests(true /* singleRun */, done)
});

gulp.task('autotest', function (done) {
    runTests(false /* singleRun */, done)
});
>>>>>>> 39d21ddd4cbc23812d5c81898b1430bc1d85629f
