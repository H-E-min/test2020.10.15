//导入模块
const gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    html = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    js = require('gulp-uglify');

//发布任务
//复制首页
function fnCodeIndex(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
}
//压缩html
function fnHtml(){
    return gulp.src('./src/pages/*.html')
        .pipe(html())
        .pipe(gulp.dest('./dist/pages'));
}
//压缩图片
function fnImg(){
    return gulp.src('./src/img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}
//压缩js
function fnJs(){
    return gulp.src('./src/js/*.js')
        .pipe(js())
        .pipe(gulp.dest('./dist/js'))
}
//编译sass且压缩
function fnCss(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        // .pipe(cssnano())
        .pipe(rename({suffix :'.min'}))
        .pipe(gulp.dest('./dist/css'))
}
//监听任务
function fnWatch(){
    gulp.watch('./src/index.html',fnCodeIndex);
    gulp.watch('./src/pages/*.html',fnHtml);
    gulp.watch('./src/img/*.*',fnImg);
    gulp.watch('./src/js/*.js',fnJs);
    gulp.watch('./src/sass/*.scss',fnCss);
}
//导出任务
exports.index = fnCodeIndex;
exports.html = fnHtml;
exports.img = fnImg;
exports.js = fnJs;
exports.css = fnCss;
exports.default = fnWatch;