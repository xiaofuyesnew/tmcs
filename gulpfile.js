/**
 * filename: gulpfile.js
 * function: config gulp command
 * create date： 2017-01-25
 * last modified: 2017-01-25
 * 
 */

/**
 * ============load module==============================
 */
    /**gulp and its components */
const gulp = require('gulp')
const sass = require('gulp-sass')
    /**browser-sync */
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
/**
 * ==================================================
 */


gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'  //compress css file
    }))
    .pipe(gulp.dest('dist/static/css'))
})

gulp.task('build', ['sass', ])