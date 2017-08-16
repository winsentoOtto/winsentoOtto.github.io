var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require("gulp-rename");
var uglify = require('gulp-uglify');

//js
gulp.task('js', function() {
     gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dest'));
});

// css
gulp.task('scss', function () {
    gulp.src('src/styles/*.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dest'));
});

gulp.task('css', function () {
    gulp.src('src/styles/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dest'));
});

//watch
gulp.task('watch', function(){
    gulp.watch(['src/styles/*.scss', 'src/js/*.js'], ['default']);
});

//default
gulp.task('default', function(){
    gulp.run('js', 'scss', 'css');
});
