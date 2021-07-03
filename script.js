'use strict';

function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.newElem = function () {
    let elem;
    if (this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.className = this.selector.slice(1);
         elem.textContent = 'Блок1';
    }
    if (this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.id = this.selector.slice(1);
         elem.textContent = 'Блок2';
    }
    elem.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;`;
    return elem;
};

let elementDiv = new DomElement('.block', 200, 350, 'yellow', 20);
let elementParagraph = new DomElement('#best', 300, 500, 'pink', 30);


document.body.appendChild(elementDiv.newElem());
document.body.appendChild(elementParagraph.newElem());