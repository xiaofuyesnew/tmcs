var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('test', function () {
    return console.log('this is a test');
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(minifycss())
    .pipe(gulp.dest('dist/static/css'));
});

gulp.task('build', ['test', 'sass']);