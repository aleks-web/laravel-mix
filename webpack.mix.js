let mix = require("laravel-mix");

const site_local_domain = "laravel-mix";

const app_folder_name = "public_html";


let app_components_uri = app_folder_name + "/components";

let app_scss_uri = app_folder_name + "/assets/scss";
let app_js_uri = app_folder_name + "/assets/js";
let app_css_uri = app_folder_name + "/assets/css";
let app_images_uri = app_folder_name + "/assets/images";


mix.sass(app_scss_uri + "/main.scss", app_css_uri).disableNotifications();


mix.browserSync({
    proxy: site_local_domain,
    files: [
        app_scss_uri + "/**/*",
        app_components_uri + "/**/*",
        app_js_uri + "/**/*",
        app_images_uri + "/**/*",
        app_folder_name + "/**/*.+(html|php)"
    ],
    reloadOnRestart: true,
});