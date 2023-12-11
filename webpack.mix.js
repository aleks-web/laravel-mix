let mix = require("laravel-mix");

const site_local_domain = "";

let app_folder_name = "public_html";

let app_components_uri = app_folder_name + "/components";

let app_scss_uri = app_folder_name + "/assets/scss";
let app_js_uri = app_folder_name + "/assets/js";
let app_css_uri = app_folder_name + "/assets/css";
let app_images_uri = app_folder_name + "/assets/images";

mix.sass(app_scss_uri + "/main.scss", app_css_uri).disableNotifications();
// .browserSync({
//     proxy: site_local_domain,
//     files: [theme_folder_path + "/assets/js/**/*", theme_folder_path + "/assets/css/**/*", theme_folder_path + "/assets/scss/**/*", theme_folder_path + "/**/*.+(html|php)"],
//     reloadOnRestart: true,
// });
