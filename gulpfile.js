/**
 * Created by bhanu.mokkala on 12/14/2016.
 */
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var del = require('del');
var runSequence = require('run-sequence');
var gnf = require('gulp-npm-files');
var bowerSrc = require('gulp-bower-src');
//var gulpFilter = require('gulp-filter');
//var historyApiFallback = require('connect-history-api-fallback');

gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:5000",
        files: ["public/**/*.*"],
        browser: "google chrome",
        port: 5000
    });
});
gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({
        script: 'index.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('images', function(){
    return gulp.src('public/img/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin({
            // Setting interlaced to true
            interlaced: true
        }))
        .pipe(gulp.dest('dist/public/img'))
});

gulp.task('useref', function(){
    return gulp.src(['public/*.html','public/*/*.*','public/*/*/*.*'])
        //.pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist/public'))
});

gulp.task('servref', function(){
    return gulp.src(['server/*.*','server/*/*.*'])
    //.pipe(useref())
    // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist/server'))
});

gulp.task('servindexref', function(){
    return gulp.src('index.js')
    //.pipe(useref())
    // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'))
});

gulp.task('copyNpmDependenciesOnly', function() {
    gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./dist'));
});

gulp.task('bowercp', function () {
    bowerSrc()
        .pipe(gulp.dest('dist/bower_components'));
});


gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('build', function (callback){
    runSequence('clean:dist',
        ['useref', 'images','servref','servindexref','bowercp','copyNpmDependenciesOnly'],
        callback
    )
});