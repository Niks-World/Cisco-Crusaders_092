src="https://code.jquery.com/jquery-3.5.1.slim.min.js" ;
src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js";
src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.(js)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       }
//     ]
//   }
// };

document.addEventListener('DOMContentLoaded', (event) => {
    let searchText=document.getElementById("search-text");
    setInterval(() => {
        searchText.placeholder = searchText.placeholder === "Chaitali" ? "bhalekari text" : "Chaitali";
    }, 3000);
});