<<<<<<< HEAD
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

require('require-dir')('./build');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('help', $.taskListing);
=======
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

require('require-dir')('./build');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('help', $.taskListing);
>>>>>>> 39d21ddd4cbc23812d5c81898b1430bc1d85629f
