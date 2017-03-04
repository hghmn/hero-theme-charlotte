// import hyperscript through the renderer module
const h = require('hexo-renderer-hyperscript/lib/h');

function markdownRendererHelper(text) {
    return hexo.extend.helper.store.markdown(text);
}

/**
* Annotation tag extension for hexo theme
*
* Syntax:
*   {% annotated_image /path/to/image [description] %}
*/
hexo.extend.tag.register('annotated_image', function(args) {
    var link = markdownRendererHelper(`![](${args.shift()})`);
    var annotation = markdownRendererHelper(`${args.join(' ')}`);

    return h('.row', [
        h('.six.columns', { innerHTML: link }),
        h('.six.columns', { innerHTML: annotation }),
    ]).outerHTML;
});
