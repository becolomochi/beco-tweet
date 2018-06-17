var gulp = require('gulp');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

const input = 'src'
const output = 'dist';

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
      .pipe(uglify())
      .pipe(gulp.dest(output + '/js'))
      .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  return gulp.src(input + '/scss/**/[^_]*.scss')
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