var gulp = require('gulp'),
  prefix =	require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  cssmin = require('gulp-cssmin'),
  rename = require("gulp-rename"),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  watch = require('gulp-watch');

function onError(err) {
  console.log(err);
}

//js
gulp.task('js', function() {
   gulp.src('src/scripts/*.js')
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(concat('main.min.js'))
  .pipe(gulp.dest('dest/scripts'));
});

// css
gulp.task('sass', function () {
  gulp.src('src/styles/**/*.sass')
  .pipe(sass())
  // .pipe(cssmin())
  // .pipe(rename({suffix: '.min'}))
  .pipe(prefix('last 15 versions'))
  .pipe(gulp.dest('dest/styles'));
});

//watch
gulp.task('watch', function(){
  gulp.watch(['src/styles/**/*.sass', 'src/scripts/*.js'], ['default']);
});

//default
gulp.task('default', function(){
  gulp.run('js', 'sass');
});
