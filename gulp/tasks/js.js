////////
// JS //
////////

import gulp from 'gulp';
import config from '../config';
import webpack from 'gulp-webpack';

gulp.task('js', done => {

  return gulp.src(config.files.js)
    .pipe(webpack(require('../../webpack.config.js')))
    .pipe(gulp.dest(config.folders.js));

});
