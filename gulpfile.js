/* DEPENDENCIES */
const { src, dest, series, parallel, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const deleteDist = require('del');

// For JS tasks
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// For HTML tasks
const htmlmin = require('gulp-htmlmin');

// For CSS tasks
const cleanCSS = require('gulp-clean-css');

// Concatenate, minify, sourcemaps
const concat = require('gulp-concat')
const imageMin = require('gulp-imagemin');
const sourceMaps = require('gulp-sourcemaps');



/* FILE PATHS */
const path = {
  html: 'src/**/*.html',
  css: 'src/css/*.css',
  js: 'src/js/*.js',
  images: 'src/images/*',
  dist: 'dist'
}



/* TASKS */
// Deletes dist folder
const cleanDist = async () => {
  await deleteDist(path.dist);
}

// HTML Task - minify
const html = async () => {
  await src(path.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(path.dist))
}

// CSS Task
const css = async () => {
  await src(path.css)
    .pipe(sourceMaps.init())
    .pipe(concat('/css/style.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourceMaps.write())
    .pipe(dest(path.dist))
}

// JS Task - ES6 to ES5 + uglify
const js = async () => {
  await src(path.js)
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('/js/main.js'))
    .pipe(uglify())
    .pipe(dest(`${path.dist}`))
}

// Images Task - Minify
const images = async () => {
  await src(path.images)
    .pipe(imageMin())
    .pipe(dest(`${path.dist}/images`))
}

// File watch - Reload browser on file changes
const watcher = async () => {
  await watch(path.html).on('change', series(html, browserSync.reload))
  await watch(path.css).on('change', series(css, browserSync.reload))
  await watch(path.js).on('change', series(js, browserSync.reload))
}

// Run Live Server
const server = async () => {
  await browserSync.init({
    server: {
      // Which directory to serve
      baseDir: path.dist
    }
  })
}

exports.default = series(
  cleanDist,
  parallel(html, css, js, images),
  server,
  watcher
);
