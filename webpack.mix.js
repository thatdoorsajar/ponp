let mix = require('laravel-mix');

mix.setPublicPath('public');

mix.js('src/js/main.js', 'public/js')
   .sourceMaps();

mix.sass('src/sass/main.scss', 'public/css')
   .options({ processCssUrls: false })
   .sourceMaps();