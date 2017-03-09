var gulp = require('gulp');
var concat = require('gulp-concat-util');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var minify = require('gulp-minify');

gulp.task('concat', function() {
  gulp.src('src/js/*.js')
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('dist/js'));
})

gulp.task('minify-css', function () {
	gulp.src('src/css/style.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/css'));
})

gulp.task('minify-js', function() {
  gulp.src('dist/js/*.js')
    .pipe(minify({
        ext:{
        	min:'.min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.min.js']
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', function() {
  gulp.run('concat', 'minify-css', 'minify-js');
})