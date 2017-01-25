/**
 * filename: gulpfile.js
 * function: config gulp command
 * create date： 2017-01-25
 * last modified: 2017-01-25
 */

/**
 * === MEMO ===
 * 
 */

/**============ load module ==============================*/

/** gulp and its components */
const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCss = require('gulp-clean-css')
const babel = require('gulp-babel')
const rimraf = require('gulp-rimraf')
const ignore = require('gulp-ignore')

/** browser-sync */
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

/**============ load module(end) =========================*/

/**============formal command for build===============================*/

/** copy template html files to dist */
gulp.task('tpl', () => {
    return gulp.src('src/tpl/*.html')
    .pipe(gulp.dest('dist/tpl'))
})

/** compile scss to compressed css */
gulp.task('sass', () => {
    return gulp.src('src/sass/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'  //compress css file
    }))
    .pipe(gulp.dest('dist/static/css'))
})

/** copy js file from src to dist */
gulp.task('js', () => {
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/static/js'))
})

/** delete whateaver in folder dist */
gulp.task('del', () => {
    return gulp.src('dist/**', { read: false })  //fast way to delete
    .pipe(ignore('dist/README.md'))
    .pipe(rimraf({ force: true }))
})

/**============ formal command for build(end) ========================*/

/**============ develop command ======================================*/

/** copy template html files to build */
gulp.task('tpl:dev', () => {
    return gulp.src('src/tpl/*.html')
    .pipe(gulp.dest('build/tpl'))
    .pipe(reload({ stream: true }))
})

/** compile scss files to css */
gulp.task('sass:dev', () => {
    return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/static/css'))
    .pipe(reload({ stream: true }))
})

/** copy js file from src to build */
gulp.task('js:dev', () => {
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('build/static/js'))
    .pipe(reload({ stream: true }))
})

/** delete whateaver in folder build */
gulp.task('del:dev', () => {
    return gulp.src('build/**', { read: false })  //fast way to delete
    .pipe(ignore('build/README.md'))
    .pipe(rimraf({ force: true }))
})

/**============ develop command(end) =================================*/

/** final command for development */
gulp.task('dev', ['tpl:dev', 'sass:dev', 'js:dev'], () => {
    // browser-sync will start in a browser automatically
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        notify: false
    })
    // gulp would watch src files changes
    gulp.watch('src/tpl/*.html', ['tpl:dev'])
    gulp.watch('src/sass/*.sass', ['sass:dev'])
    gulp.watch('src/js/*.js', ['js:dev'])
})

/** final command for dist */
gulp.task('build', ['del', 'tpl', 'sass', 'js'])