var compress = require('html-compress').compress;

module.exports = function(content, file, conf){
    if(file.isHtmlLike){
    	content = compress(content, conf);
    }

    return content;
};