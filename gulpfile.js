var gulp = require('gulp');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

const input = 'src'
const output = 'docs';

gulp.task('serve', ['js', 'sass', 'pug'], function() {
  browserSync.init({
    server: './' + output
  });
  gulp.watch(input + "/js/**/*.js", ['js']);
  gulp.watch(input + "/scss/**/*.scss", ['sass']);
  gulp.watch(input + "/**/*.pug", ['pug']);
});

gulp.task('js', function() {
  return gulp.src(input + '/js/**/[^_]*.js')
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(babel({
        presets: ['env']
      }))
      .pipe(uglify())
      .pipe(gulp.dest(output + '/js'))
      .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  return gulp.src(input + '/scss/**/[^_]*.scss')
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(sass())
      .pipe(gulp.dest(output + '/css'))
      .pipe(browserSync.stream());
});

gulp.task('pug', function() {
  return gulp.src(input + '/**/[^_]*.pug')
  .pipe(pug())
  .pipe(gulp.dest(output + '/'))
  .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);