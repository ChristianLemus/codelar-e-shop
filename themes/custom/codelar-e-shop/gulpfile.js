const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const browserSyncReload = browserSync.reload;
const connect = require("gulp-connect-php");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("gulp-cssnano");

// destiny
const styleSrc = "./src/sass/*.sass";
const destinyCss = "./css";

// task styles: minify css
gulp.task("styles", function () {
  const tailwindcss = require("tailwindcss");

  return gulp
    .src(styleSrc)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([tailwindcss("./tailwind.config.js")]))
    .pipe(cssnano())
    .pipe(gulp.dest(destinyCss));
});

// task watch for css | js | twig
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
