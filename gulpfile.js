'use strict';

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');

// gulp.task('clean', function() {
//   return gulp.src('bulid')
//     .pipe(clean({force: true}));
// });

gulp.task('clean', function (cb) {
  del([
    'build/**'
  ], cb);
});

gulp.task('build', function(callback) {
  runSequence('clean', 'build-js', callback);
});

gulp.task('build-js', function() {
  return gulp.src([
      'app.js',
      'services/*.js'
    ])
    .pipe(concat('angularjs-maillinker.debug.js'))
    .pipe(gulp.dest('build/scripts'))
    .pipe(stripDebug())
    .pipe(concat('angularjs-maillinker.js'))
    .pipe(gulp.dest('build/scripts'))
    .pipe(uglify())
    .pipe(rename('angularjs-maillinker.min.js'))
    .pipe(gulp.dest('build/scripts'))
    .on('error', gutil.log);
});