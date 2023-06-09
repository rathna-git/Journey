const path = require( 'path');
const HTMLWebpackPlugin = require( 'html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return{
    entry: [ 
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },

    mode: env.NODE_ENV,

    devServer: {
        host: 'localhost',
        port: 8080,
        // enable HMR on the devServer
        hot: true,
        // fallback to root for other urls
        historyApiFallback: true,
    
        static: {
          // match the output path
          directory: path.resolve(__dirname, 'src'),
          // match the output 'publicPath'
          publicPath: '/',
        },
    
        headers: { 'Access-Control-Allow-Origin': '*' },
       
        /**
         * proxy is required in order to make api calls to
         * express server while using hot-reload webpack server
         * routes api fetch requests from localhost:8080/api/* (webpack dev server)
         * to localhost:3000/api/* (where our Express server is running)
         */
        proxy: {
          '/auth': {
            target: 'http://localhost:3000/',
            secure: false,
          },
          /*
          '/assets/**': {
            target: 'http://localhost:3000/',
            secure: false,
          }, */
        }, 
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        })
    ],

    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.js', '.jsx'],
      },

    module: {
        rules: [
            {
               test: /.(js|jsx)$/,
               exclude: /node_modules/,
               use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
               }
            },
            {
              test: /.(css|scss)$/,
              exclude: /node_modules/,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
  
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]'
                }
                },
              ],
            },
            {         
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
            },
        ]
    }
  }
}

