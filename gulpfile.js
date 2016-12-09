const gulp = require('gulp');
const connect = require('gulp-connect');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');
const sass = require('node-sass');
const watch = require('gulp-watch');
const historyApiFallback = require('connect-history-api-fallback');
/*when course appearing error for preventing exit*/
const plumber = require('gulp-plumber');

/*gulp.src('./src/*.ext')
    .pipe(plumber())//处理报错某块
    .pipe(coffee())//校验模块
    .pipe(gulp.dest('./dist'));*/
const config = {
    port: 3939,
    debug: true,
    name: {
        bundlejs: 'bundle.js',
        folderjs: 'dist'
    },
    path: {
        html: './App/Html/*.html',
        css: './App/**/*.css',
		scss: './App/**/*.scss',
        js: './App/**/*.js',
        jsx: './App/**/*.jsx',
        dist: './dist',
        mainhtml: './App/index.html',
        mainjs: './App/App.js'
    }
};

const cors = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
};
/*服务器配置*/
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        livereload: {
            livereload: true,
            port: 38291
        },
        middleware: function () {
            return [historyApiFallback({}), cors];
        }
    });
});

gulp.task('html', function () {
    gulp.src(config.path.mainhtml)
	.pipe(gulp.dest(config.path.dist))
	.pipe(connect.reload());
    gulp.src(config.path.html)
	.pipe(gulp.dest(config.path.dist))
	.pipe(connect.reload());
});
gulp.task('css', function() {
    gulp.src(config.path.mainhtml)
	.pipe(gulp.dest(config.path.css))
	.pipe(connect.reload());
	
    gulp.src(config.path.html)
	.pipe(gulp.dest(config.path.css))
	.pipe(connect.reload());
});

  //var sass = require('gulp-sass');
  
  gulp.task("sass", function() {
/*return */gulp.src(config.path.html)
          .pipe(sass().on("error", sass.logError))
          .pipe(gulp.dest(config.path.dist));
  });
  

gulp.task('js', function () {
     gulp.src('*')
	.pipe(plumber())
	.pipe(webpack(webpackConfig))
	.pipe(gulp.dest(config.path.dist))
	.pipe(connect.reload());
});

/**
 * 先不管，这是MD5效验
 */
// gulp.task('md5:js', function (done) {
//     gulp.src('dist/js/*.js')
//         .pipe(md5(10, 'dist/app/*.html'))
//         .pipe(gulp.dest('dist/js'))
//         .on('end', done);
// });

/**
 * 监听配置
 */
gulp.task('watch', function () {
    gulp.watch([
	config.path.mainhtml,
	config.path.html, 
	config.path.js,
	config.path.css,
	config.path.scss,
	config.path.jsx],
	['html', 'js','sass']);
});

gulp.task('default', ['connect', 'html', 'js', 'css','watch']);