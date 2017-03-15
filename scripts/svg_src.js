// import hyperscript through the renderer module
const h = require('hexo-renderer-hyperscript/lib/h');

var fs = require('hexo-fs');
var pathFn = require('path');


function markdownRendererHelper(text) {
    return hexo.extend.helper.store.markdown(text);
}

/**
 * Insert an svg into the html from source
 *
 * Syntax:
 *   {% svg_src /path/to/svg [args] %}
 */
hexo.extend.tag.register('svg_src', function(args) {
    var filename = args[0];
    var path = pathFn.join(hexo.source_dir, filename);
    
    return fs.readFile(path)
        .then(function(content) {
            return content;
        })
        .catch(err => console.log(err));
}, {async: true});
