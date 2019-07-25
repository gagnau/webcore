const path = require('path');

module.exports = {
    context: path.resolve(__dirname, '../../sites/testsite'),
    entry: {
        main: './index.js',
    },
    output: {
        filename: 'testsite.min.js',
        path: path.resolve(__dirname, '../../dist/testsite/assets/'),
    }
};
