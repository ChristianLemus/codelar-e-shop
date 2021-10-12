const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const browserSyncReload = browserSync.reload;
const connect = require("gulp-connect-php");
// const sass = require("gulp-sass");

gulp.task("watch", () => {
  gulp.watch("./css/**/*.css").on("change", browserSyncReload);
  gulp.watch("./js/**/*.js").on("change", browserSyncReload);
  gulp.watch("./templates/**/*.html.twig").on("change", browserSyncReload);
  connect.server({}, () => {
    browserSync.init({
      proxy: "http://localhost/codelar-e-shop/",
    });
  });
});
