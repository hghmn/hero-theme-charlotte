function markdownRendererHelper(text) {
    return hexo.extend.helper.store.markdown(text);
}

/**
* Annotation tag extension for hexo theme
*
* Syntax:
*   {% annotated /path/to/image [description] %}
*/
hexo.extend.tag.register('annotated_image', function(args) {
    var link = markdownRendererHelper(`![](${args.shift()})`);
    var annotation = markdownRendererHelper(`_${args.join(' ')}_`);

    return `<div class="row">
    <div class="six columns">${link}</div>
    <div class="six columns">${annotation}</div>
    </div>`;
});
