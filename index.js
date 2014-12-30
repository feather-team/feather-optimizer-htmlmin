var minify = require('html-minifier').minify;

module.exports = function(content, file, conf){
    if(file.isHtmlLike){
    	content = minify(content, conf);
    }

    return content;
};