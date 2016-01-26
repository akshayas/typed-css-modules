'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var mocha = require('gulp-mocha');

gulp.task('compile', () => {
  return gulp.src('src/**/*.js')
    .pipe(plumber())
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('lib'))
    ;
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['compile']);
});

gulp.task('test', () => {
  return gulp.src('test/**/*.spec.js')
    .pipe(mocha({reporter: 'nyan'}))
    //.once('error', () => process.exit(1))
    //.onve('end', () => process.exit())
});