// Layout Template for Home Page and default
var h = require('hyperscript');
var layout = require('./partial/layout');
var makePost = require('./partial/post');

module.exports = function(page, _data) {
    var config = _data.config;
    
    return layout({
        config: _data.config,
        content: [
            h('.posts',
                page.posts.map(p => makePost(p, config, _data.layout))),
        ],
        type: 'index',
        data: _data,
    });
};
