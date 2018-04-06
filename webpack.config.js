const path = require('path');

let config = {
  // watch: true,
  entry: './src/dj-app/dj-app.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
};

let desktopConfig = Object.assign({}, config,{
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'demo/desktop/dist')
  }
});
let mobileConfig = Object.assign({}, config,{
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'demo/mobile/dist')
  }
});
let webConfig = Object.assign({}, config,{
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'demo/web/dist')
  }
});

let testConfig = Object.assign({}, config,{
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'test/dist')
  }
});

module.exports = [
  desktopConfig,
  mobileConfig,
  webConfig,
  testConfig,
];