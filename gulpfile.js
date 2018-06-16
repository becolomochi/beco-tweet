var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function() {
  return gulp.src('src/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('dist/'));
});