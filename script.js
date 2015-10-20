(function(){

    var symbols = document.querySelectorAll('symbol'),
        use,
        mitten,
        grid,
        xlinkns = "http://www.w3.org/1999/xlink",
        svg = document.querySelector('svg'),
        x, y;

    function setAttributes(el, id, color, x, y) {

                el.setAttributeNS(xlinkns, 'xlink:href', '#'+id);
                el.setAttributeNS(null, 'style', 'fill:'+color);
                el.setAttributeNS(null, 'x', x);
                el.setAttributeNS(null, 'y', y);
                el.setAttributeNS(null, 'width', 80);
                el.setAttributeNS(null, 'height', 80);
                //el.setAttributeNS(null, 'transform', 'rotate('+deg+')');

    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    grid = {
        x: 20,
        y: 10,
        size: 80
    };

    function generateMittens(gridX,gridY,gridSize) {
        svg = document.querySelector('svg');
        console.log(svg);

        for (x=0; x < gridX * gridSize; x += gridSize) {
            for (y=0; y < gridY * gridSize; y += gridSize) {

                use = document.createElementNS("http://www.w3.org/2000/svg", 'use');

                mitten = Math.floor(Math.random() * symbols.length);

                setAttributes(use, symbols[mitten].id, getRandomColor(), x, y);

                svg.appendChild(use);

            }
        }
    }

    var button = document.querySelector('button');
    button.onclick = function(){
        var uses = document.querySelectorAll('use'), i;
        for (i = 0; i < uses.length; ++i) {
            svg.removeChild(uses[i]);
        }
        generateMittens(grid.x,grid.y,grid.size);
    };

    generateMittens(grid.x,grid.y,grid.size);


})();