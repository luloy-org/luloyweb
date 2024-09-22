
function loadtheme() {
 const data = localStorage.theme?localStorage.theme:'light'
 switch (data) {
  case 'light':
   document.documentElement.setAttribute('data-bs-theme', 'light')
   break;
  case 'dark':
   document.documentElement.setAttribute('data-bs-theme', 'dark')
   break;
 }
}

loadtheme()

SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: true,
  packages: {
    ".": {
      main: './app.js',
      defaultExtension: 'js'
    }
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@17.0.1/umd/react.development.js',
    'react-dom': 'react-dom@17.0.1/umd/react-dom.development.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./app')
.then(function (){
 window.loadpage('home')
 window.loadtheme()
 
 
 }
 
)
  .catch(console.error.bind(console));
