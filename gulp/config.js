////////////
// Config //
////////////

import browserSync from 'browser-sync';

const config = {

  files: {
    php: ["./*/**.php"],
    js: [
      './assets/js/app/**/*.js',
      '!./assets/js/app.min.js',
      '!./assets/js/vendor.min.js',
      '!./assets/js/app.min.js.map'
    ],
    jsEntry: './assets/js/app/app.js',
    css: './assets/css/app/**/*.scss',
    cssEntry: './assets/css/app/app.scss',
    editorEntry: './assets/css/app/editor.scss',
  },
  folders: {
    css: './assets/css',
    js: './assets/js',
  },
  names: {
    js: 'theme.min.js',
    css: 'theme.min.css',
    editor: 'editor.min.css'
  },
  serverName: 'fab.dev',
  bs: browserSync.create()

};

export default config;
