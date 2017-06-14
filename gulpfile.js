(() => {
    const
        dist = '//srv-devweb-01.2sic.com/Projects/2sxc Apps Dev/Web/Portals/app-dnn-sxc-angular-dev/2sxc/app-dnn-sxc-angular-dev/',
        $ = require('gulp'),
        watch = require('gulp-watch');
    
    $.task('copy-to-dist', () => watch('dist/**/*.*', { base: 'dist' })
        .pipe($.dest(dist)));
})();