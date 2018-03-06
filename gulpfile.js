const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const data = require('gulp-data');
const watch = require('gulp-watch');
const htmlBeautify = require('gulp-html-beautify');

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
            .pipe(htmlBeautify({
                indent_size: 4,
                indent_char: ' ',
                intent_with_tabs: true,
                end_with_newline: true,
                max_preserve_newlines: 1,
                //brace_style: 'expand',
                // 这里是关键，可以让一个标签独占一行
                unformatted: true,
                // 默认情况下，body | head 标签前会有一行空格
                extra_liners: []
            }))
            .pipe(gulp.dest('dist'))
    }
)
;

gulp.task('watch', () => {
    gulp.watch(['src/**/*'], ['build'])
})

gulp.task('default', ['watch', 'build']);