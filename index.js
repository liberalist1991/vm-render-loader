'use strict';
const loaderUtils = require('loader-utils')
const velocity = require('velocityjs');
const fetch = require('node-fetch');

module.exports = function (source) {

    if (this.cacheable) {
        this.cacheable(true)
    }

    var callback = this.async();

    const options = loaderUtils.getOptions(this);

    if (options && options.url) {
        fetch(options.url).then(res => res.json()).then(body => {

            let sourceAll = velocity.render(source, body);

            callback(null, escape2Html(sourceAll));

        });

    } else {
        callback(null, source);

    }


}


function escape2Html(str) {

    var arrEntities = {
        'lt': '<',
        'gt': '>',
        'amp': '&'
    };

    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
        return arrEntities[t];
    });
}
