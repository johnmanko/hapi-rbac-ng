'use strict';

const Hoek = require('@hapi/hoek');

exports = module.exports = (source, key, context, callback) => {

    if(!context) {
        // Return nothing
        return callback();
    }

    callback(null, Hoek.reach(context, 'query.' + key));
};
