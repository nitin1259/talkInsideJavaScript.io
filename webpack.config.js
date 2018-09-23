const path = require('path'); // this is just to include a build in node module 
const htmlWebPackPlugin = require('html-webpack-plugin'); // this one is used to bind the html and js automatically...
module.exports = {
    entry: ['babel-polyfill', './src/js/script_forkify.js'], // it is the starting point where webpack start the bundling.
    output: {
        path: path.resolve(__dirname, 'dist'), // this path should be the absolute path here. to have access to absolute path we need to use a build in node package 
        filename: 'js/bundle.js',
    }, // will tell to webpack where to save our bundle file
    // mode: 'development' // while working in production build it is not good practice to change it every time while building... so we will set it in package scripts files...
    devServer: {
        contentBase: './dist' // here we will specify the folder from which webpack should serve our files
    },
    plugins: [
        new htmlWebPackPlugin({
            filename: 'index.html',
            template: './src/forkify_app.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    }
}