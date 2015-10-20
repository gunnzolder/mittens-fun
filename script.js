(function($){

    var symbols = document.querySelectorAll('symbol'),
        use,
        xmlns = "http://www.w3.org/2000/svg",
        xlinkns = "http://www.w3.org/1999/xlink",
        svg = document.querySelector('svg');

    function setAttributes(el, id, color, x) {

                el.setAttributeNS(xlinkns, 'xlink:href', '#'+id);
                el.setAttributeNS(null, 'style', 'fill:'+color);
                el.setAttributeNS(null, 'x', x);

    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    for(var i = 0; i < symbols.length; i++) {

        //attrs = new attributes(symbols[i].id, 'red');

        //console.log(attrs);

        use = document.createElementNS("http://www.w3.org/2000/svg", 'use');

        setAttributes(use, symbols[i].id, getRandomColor(), i*120-450);
        console.log(use);
        svg.appendChild(use);
    }



    /*
    *
    *
    * <use xlink:href="#sym01" x="0" y="0" width="100" height="50"/>
    *
    * */

})(jQuery);