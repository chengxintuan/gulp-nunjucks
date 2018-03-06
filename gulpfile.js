const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const data = require('gulp-data');
const watch = require('gulp-watch');

gulp.task('build', () => {
        gulp.src('src/**/*.html')
            .pipe(data(() => ({
                name: 'home',
                nav: [{
                    name: 'WebEx by Cisco'
                }, {
                    name: 'Why WebEx?'
                }, {
                    name: 'Products'
                }, {
                    name: 'Plans & Pricing'
                }]
            })))
            .pipe(nunjucks.compile())
            .pipe(gulp.dest('dist'))
    }
)
;

gulp.task('watch', () => {
    gulp.watch(['src/**/*'], ['build'])
})

gulp.task('default', ['watch', 'build']);