var button = document.createElement('button');
var btnText = document.createTextNode('Add Square');
var div2 = document.createElement('div');

button.className = 'createSquare';

button.appendChild(btnText);
document.body.appendChild(button);
document.body.appendChild(div2);


button.addEventListener('click', function () {

    var div = document.createElement('div');
    div.className = 'square';
    var existingSquares = document.getElementsByClassName('square').length;

    div.addEventListener("mouseover", function () {
        div.innerHTML = existingSquares;
    })

    div.addEventListener('mouseleave', function () {
        div.innerHTML = '';
    })

    var colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'pink', 'grey'];

    div.addEventListener('click', function () {

        var random = Math.floor((Math.random() * 8));
        div.style.backgroundColor = colors[random];
    })

    div.addEventListener('dblclick', function () {

        if (div.id % 2 == 0) {

            if (div.nextSibling == null) {
                alert("No square to be removed!")
            } else {
                div.nextSibling.remove();
            }

        } else {
            if (div.previousSibling == null) {
                alert("No square to be removed!")
            } else {
                div.previousSibling.remove();
            }
            
        }

    });

    div.id = existingSquares;
    div2.appendChild(div);
})