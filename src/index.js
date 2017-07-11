import _ from 'lodash';
function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['wocaonimaHello', 'webpack88888'], ' ');
    element.classList.add('border-color');
    return element;
}

document.body.appendChild(component());