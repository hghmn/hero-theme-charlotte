const INDENT = 4;

// Serilize json while preventing circular references
module.exports = function serialize(object) {
    var cache = [];
    var stringified = JSON.stringify(object, function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return `[${key}]`;
            }
            // Store value in our collection
            cache.push(value);
        }
        return value;
    }, INDENT);

    cache = null; // garbage collect
    return stringified;
};
