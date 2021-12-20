// gulpfile.js
var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    concatCss = require('gulp-concat-css'),
    watch = require('gulp-watch');
    // cleanCSS = require('gulp-clean-css'),
    // liveload = require('gulp-livereload');
//var csscomb = require('gulp-csscomb');

//경로변수
  src = './src',
  dist = './public/resources/css',
  paths = {
    //js: src + '/js/*.js',
    scss: src + '/scss/*.scss'
    //html: src + '/**/*.html'
  };

// 1.일반 컴파일
gulp.task('sass', function () {
  return gulp.src(paths.scss)  // 입력 경로
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(src + '/styles/'));  // 출력 경로
});

// // // 런타임 중 파일 감시
// gulp.task('sass:watch', function () {
//   gulp.watch('./src/scss/*.scss', ['sass']);  // 입력 경로와 파일 변경 감지 시 실행할 Actions(Task Name)
// });

gulp.task('concat', function () {
  return gulp.src(src + '/styles/*.css')
    .pipe(concatCss("new_bundle.css"))
    .pipe(gulp.dest(src + '/css'))
    .pipe(gulp.dest(dist));//임시 
});

//css minify
// gulp.task('minify', () => {
//   return gulp.src(src + '/css/*.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest(dist));
// });

gulp.task('sass:watch', function () {
  gulp.watch(paths.scss, ['sass']);  
  gulp.watch(src + '/scss/*.scss', ['sass', 'concat']); 
});

// gulp.task('default', gulp.series('gulp_sass', 'concat'));

// gulp.task('default', gulp.series(['sass', 'concat', 'minify']));
// gulp.task('default', gulp.series(['sass', 'sass:watch', 'concat']));