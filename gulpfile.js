var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("styles", async function() {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});

//Watch task
gulp.task("default", async function() {
  gulp.watch("sass/**/*.scss", gulp.series("styles"));
});
