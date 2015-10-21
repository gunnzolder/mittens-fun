var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var inject = require('gulp-inject');


gulp.task('svgstore', function () {
    var svgs = gulp
        .src('svg/*.svg')
        //.src('isometric-devices-lineal/svg/*.svg')
        //.src('employees/svg/*.svg')
        //.src('christmas-trees-line-craft/svg/*.svg')
        //.src('circled-vol1/svg/*.svg')
        .pipe(svgstore({ inlineSvg: true }));

    function fileContents (filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src('src/index.html')
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest('.'));
});