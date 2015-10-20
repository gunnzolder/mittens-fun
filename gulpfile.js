var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var inject = require('gulp-inject');

gulp.task('index', function () {
    var target = gulp.src('./src/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./src'));
});

gulp.task('svgstore', function () {
    var svgs = gulp
        .src('svg/*.svg')
        .pipe(svgstore({ inlineSvg: true }));

    function fileContents (filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src('src/index.html')
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest('.'));
});