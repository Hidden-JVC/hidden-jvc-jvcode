const marked = require('marked');

const uuidv4 = require('./uuidv4.js');
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
    },

    html(html) {
        let value = false;
        switch (html.trim()) {
            case '<spoil>':
                let uuid = uuidv4();
                value = `<div class="bloc-spoil-jv">
                <input type="checkbox" id="${uuid}" class="open-spoil">
                <label class="barre-head" for="${uuid}">
                    <span class="txt-spoil"> Spoil </span>
                    <span class="aff-spoil"> Afficher </span>
                    <span class="masq-spoil"> Masquer </span>
                </label>
                <div class="contenu-spoil">`;
                break;
            case '</spoil>':
                value = `</div>
                </div>`;
                break;
        }
        return value;
    }
};

marked.use({ renderer });

function parse(input) {
    let output = marked.parse(input, { breaks: true });

    for (const smiley of smileys) {
        const url = `https://image.jeuxvideo.com/smileys_img/${smiley.value}.${smiley.ext}`;
        const replaceValue = `<img src="${url}" alt="${smiley.code}" data-code="${smiley.code}" title="${smiley.code}" width="${smiley.width}" height="${smiley.height}">`;
        output = output.replaceAll(smiley.code, replaceValue);
    }

    return output;
}

module.exports = {
    parse
};
