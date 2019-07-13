const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('scss', function() {
    return gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
});
gulp.task('watch', function() {
   gulp.watch('*.scss', gulp.series('scss'));
});

gulp.task('run',gulp.series(['scss', 'watch']));