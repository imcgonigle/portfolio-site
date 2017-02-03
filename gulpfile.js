// Pull in gulp from node_modules
var gulp = require('gulp');

// Plugins

// JShint is used to make sure that havascript code is correct.
var jshint = require('gulp-jshint');

// gulp-sass is a plugin for gulp to compile sass/scss files
var sass = require('gulp-sass');

// browser-sync used to set up a server
var browserSync = require('browser-sync').create();

// Used for concatenating files in the correct order
var useref = require('gulp-useref');

// Used to minify javascript files
var uglify = require('gulp-uglify');

// Used to minify css files
var cssnano = require('gulp-cssnano');

// used to check file type
var gulpIf = require('gulp-if');

// Used to minify images
var imagemin = require('gulp-imagemin');

// keep minified images in cache so you don't have to rebuild theme
var cache = require('gulp-cache');

// Delete all the files in the dist before building.
var del = require('del');

var runSequence = require('run-sequence');

gulp.task('lint', function() {
    gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('sass', function() {
    return gulp.src('app/assets/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// Copy all the component folders so you have access to the templates
gulp.task('copy-components', function() {
    gulp.src('./app/components/**')
    .pipe(gulp.dest('dist/components'));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    // compile sass when saved
    gulp.watch('app/assets/scss/**/*.scss', ['sass']);
    
    // Reload browserSync when html files are saved
    gulp.watch('app/**/*.html', browserSync.reload);

    // Reload browserSync when any JavaScript files are saved
    gulp.watch('app/**/*.js', browserSync.reload);
})

gulp.task('useref', function() {
    return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
})

gulp.task('images', function() {
    return gulp.src('app/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({
        interlaced: true
    })))
    .pipe(gulp.dest('dist/assets/images'))
})

gulp.task('fonts', function() {
  return gulp.src('app/assets/fonts/**/*')
  .pipe(gulp.dest('dist/assets/fonts'))
})

gulp.task('clean:dist', function() {
    return del.sync('dist');
})

gulp.task('cache:clear', function(callback) {
    return cache.clearAll(callback)
})

gulp.task('build', function(callback) {
    console.log('Building files');
    runSequence('clean:dist', [
        'sass', 'useref', 'images', 'fonts', 'copy-components'
    ], callback)
})

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})