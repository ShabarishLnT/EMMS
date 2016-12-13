<<<<<<< HEAD
'use strict';

var gulp = require('gulp');

// inject bower components
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    return gulp.src('src/index.html')
        .pipe(wiredep({
            directory: 'bower_components',
            exclude: [/bootstrap\.css/],
            dependencies: true,
            devDependencies: true
        }))
        .pipe(gulp.dest('src'));
});
=======
'use strict';

var gulp = require('gulp');

// inject bower components
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    return gulp.src('src/index.html')
        .pipe(wiredep({
            directory: 'bower_components',
            exclude: [/bootstrap\.css/],
            dependencies: true,
            devDependencies: true
        }))
        .pipe(gulp.dest('src'));
});
>>>>>>> 39d21ddd4cbc23812d5c81898b1430bc1d85629f
