const marked = require('marked');

const smileys = require('./smileys.js');

const renderer = {
    link(href) {
        if (/https?:\/\/(?:.*?\.)noelshack.com/.test(href)) {
            return `
            <a href="${href}" target="_blank" class="xXx">
                <img class="img-shack" src="${href}" alt="${href}" width="68" height="51">
            </a>`;
        }
        return false;
    },

    blockquote(quote) {
        return `<blockquote class="blockquote-jv">${quote}</blockquote>`;
    }
};

marked.use({ renderer });

function parse(input) {
    let output = marked.parse(input);

    for (const smiley of smileys) {
        const url = `http://image.jeuxvideo.com/smileys_img/${smiley.value}.${smiley.ext}`;
        const replaceValue = `<img src="${url}" alt="${smiley.code}" data-code="${smiley.code}" title="${smiley.code}" width="${smiley.width}" height="${smiley.height}">`;
        output = output.replace(smiley.code, replaceValue);
    }

    return output;
}

module.exports = {
    parse
};
