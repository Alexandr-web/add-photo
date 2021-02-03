const { dest, src, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function styles() {
  return src('./src/assets/scss/*.scss')
    .pipe(scss({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({
      overrideBrowsersList: ['last 5 versions'],
      cascade: true
    }))
    .pipe(concat('main.css'))
    .pipe(dest('./public/css/'));
}

function watching() {
  watch('./src/assets/scss/*.scss', parallel(styles));
}

exports.build = parallel(styles);
exports.default = parallel(exports.build, watching);