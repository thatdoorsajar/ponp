let mix = require('laravel-mix');

mix.js('resources/assets/js/main.js', 'public/js')
   .sourceMaps();

mix.sass('resources/assets/sass/main.scss', 'public/css')
   .options({ processCssUrls: false })
   .sourceMaps();