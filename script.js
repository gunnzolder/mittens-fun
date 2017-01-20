(function () {

    var symbols = document.querySelectorAll('symbol'),
        use,
        mitten,
        grid,
        svgns = "http://www.w3.org/2000/svg",
        xlinkns = "http://www.w3.org/1999/xlink",
        svg = document.querySelector('svg'),
        x, y;

    function setAttributes(el, id, color, x, y, deg) {
        el.setAttributeNS(xlinkns, 'xlink:href', '#' + id);
        el.setAttributeNS(null, 'style', 'fill:' + color);
        el.setAttributeNS(null, 'x', x);
        el.setAttributeNS(null, 'y', y);
        el.setAttributeNS(null, 'width', 30);
        el.setAttributeNS(null, 'height', 30);
        el.setAttributeNS(null, 'transform', 'rotate('+deg+','+(x+40)+','+(y+40)+')');
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getShadesOf(h) {
        var s = Math.floor(Math.random() * 100),
            l = Math.floor(Math.random() * (50 - 10)) + 10;
        return 'hsl('+h+','+s+'%,'+l+'%)';
    }


    grid = {
        x: 80,
        y: 30,
        size: 30
    };

    function generateMittens(gridX, gridY, gridSize) {
        for (x = 0; x < gridX * gridSize; x += gridSize) {
            for (y = 0; y < gridY * gridSize; y += gridSize) {
                if (((x/gridSize%2) == (y/gridSize%2))) {
                    var randX = x+Math.random()*20,
                        randY = y+Math.random()*20;
                    use = document.createElementNS(svgns, 'use');
                    mitten = Math.floor(Math.random() * symbols.length);
                    //setAttributes(use, symbols[mitten].id, getRandomColor(), x, y, Math.random() * 180);
                    //setAttributes(use, symbols[mitten].id, getRandomColor(), x, y, 0);
                    setAttributes(use, symbols[mitten].id, getShadesOf(10), x, y, Math.random() * 180);
                    //setAttributes(use, symbols[mitten].id, getRandomColor(), randX, randY, Math.random() * 180);
                    svg.appendChild(use);
                }
            }
        }
    }

    var button = document.querySelector('button');
    button.onclick = function () {
        var uses = document.querySelectorAll('use'), i;
        for (i = 0; i < uses.length; ++i) {
            svg.removeChild(uses[i]);
        }
        generateMittens(grid.x, grid.y, grid.size);
    };

    generateMittens(grid.x, grid.y, grid.size);


})();