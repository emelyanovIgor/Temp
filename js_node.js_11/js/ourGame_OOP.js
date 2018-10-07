// 1.поместить функционал, который мы написали в класс Game, написать в нём конструктор и функции через нижнее подчёркивание.
// Все эти функции вызвать в конструкторе. В сам конструктор передать при создании colors и lineSize.

/* 
Вкратце опишу, что должно быть (примерное описание)
class Game {
    constructor(size, colors) {
    this._factory(size, colors);
    }
    _factory(){
    this._createBlock();
    }
    _createBlock(){}
    }
    
    const blockStyles
    const colors = {};
    const lineSize = 6;
    
    const myGame = new Game(lineSize, colors); 
    */

// *********************************************************************************************

/* class Game {
    constructor(size, colors) {
        this._factory(size, colors);
    }
    _factory(size, colors){ for (let i = 0; i < size; i++) {
        const block = this._createBlock('div', blockStyles);
        //block.style.top = ${H * i}px;
        block.style.left = `${W * i}px`;
        block.style.backgroundColor = `rgb(
            ${(Math.abs(colors.red.from - colors.red.to) / (size - 1)) * (i + 1)}, 
            ${(Math.abs(colors.green.from - colors.green.to) / (size - 1)) * (i + 1)}, 
            ${(Math.abs(colors.blue.from - colors.blue.to) / (size - 1)) * (i + 1)}
        )`;

        document.body.appendChild(block);
    }
    }
    _createBlock(type, styles){
        const block = document.createElement(type);

        for (const key in styles) {
            block.style[key] = styles[key];
        }

        return block;
    }
}

const W = 60;
const H = 100;
const blockStyles = {
    width: `${W}px`,
    height: `${H}px`,
    position: 'absolute'
};

const colors = {
    red: {
        from: 255,
        to: 0
    },
    green: {
        from: 100,
        to: 200
    },
    blue: {
        from: 200,
        to: 0
    }
};

const lineSize = 6;

const myGame = new Game(lineSize, colors);    
*/

// 2) оформить код через паттерн Синглтон, чтобы сколько бы мы не вызывали new Game(), то у нас бы не создавалось новых экземпляров.

// *********************************************************************************************

let gameInstance = null;

class Game {
  constructor(size, colors) {
    if (!gameInstance) {
      this.size = size;
      this.colors = colors;
      gameInstance = this;
    }
    gameInstance._factory(gameInstance.size, gameInstance.colors);

    return gameInstance;
  }
  _factory(size, colors) {
    for (let i = 0; i < size; i++) {
      const block = this._createBlock("div", blockStyles);
      //block.style.top = ${H * i}px;
      block.style.left = `${W * i}px`;
      block.style.backgroundColor = `rgb(
            ${(Math.abs(colors.red.from - colors.red.to) / (size - 1)) *
              (i + 1)}, 
            ${(Math.abs(colors.green.from - colors.green.to) / (size - 1)) *
              (i + 1)}, 
            ${(Math.abs(colors.blue.from - colors.blue.to) / (size - 1)) *
              (i + 1)}
        )`;

      document.body.appendChild(block);
    }
  }
  _createBlock(type, styles) {
    const block = document.createElement(type);

    for (const key in styles) {
      block.style[key] = styles[key];
    }

    return block;
  }
}

const W = 60;
const H = 100;
const blockStyles = {
  width: `${W}px`,
  height: `${H}px`,
  position: "absolute"
};

const colors = {
  red: {
    from: 255,
    to: 0
  },
  green: {
    from: 100,
    to: 200
  },
  blue: {
    from: 200,
    to: 0
  }
};

const lineSize = 6;

const myGame = new Game(lineSize, colors);