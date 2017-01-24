const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
<<<<<<< HEAD
=======
const cleanCss = require('gulp-clean-css');
>>>>>>> e0a67a13d505709676e54ac928f0275351a51a94
const reload = browserSync.reload;

gulp.task('test', function () {
    return console.log('this is a test');
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/static/css'));
});

gulp.task('build', ['test', 'sass']);