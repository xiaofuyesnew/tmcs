const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cleanCss = require('gulp-clean-css');
const reload = browserSync.reload;

gulp.task('test', function () {
    return console.log('this is a test');
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/static/css'))
    .pipe(reload({stream: true}));
});

gulp.task('sass:dev', function () {
    return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/static/css'))
    .pipe(reload({stream: true}));
});

gulp.task('dev', ['sass:dev'], function () {
    browserSync.init({

    });
});

gulp.task('build', ['test', 'sass']);