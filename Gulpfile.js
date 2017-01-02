var gulp = require("gulp");
var sass = require("gulp-sass");
var eyeglass = require("eyeglass");
var sassIncludePaths = require("sass-include-paths");


var sassOptions = {
  // put node-sass options you need here.
  includePaths: [ "./scss", "../share-test" ],

  eyeglass: {
    // put eyeglass options you need here.
    root: "./"
  }
};


gulp.task("eyeglass", function () {
  gulp.src("./scss/**/*.scss")
    .pipe(sass(eyeglass(sassOptions)).on("error", sass.logError))
    .pipe(gulp.dest("./css-eyeglass"));
});


gulp.task("sass", function() {
  sassOptions.includePaths = sassOptions.includePaths.concat(sassIncludePaths.nodeModulesSync());
  gulp.src("./scss/**/*.scss")
      .pipe(sass(sassOptions).on("error", sass.logError))
      .pipe(gulp.dest("./css"));
});
