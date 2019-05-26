import _ from 'lodash'
import './style.css'
import Icon from './icon.jpg'
import data from './data.xml'
import person from './person.json'

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', "yyyy"], ' ');

    element.classList.add('hello');

    // add iamge
    let myicon = new Image()
    myicon.src = Icon
    myicon.width= 100
    element.appendChild(myicon)

    // print data
    console.log(data)

    console.log(person)

    return element;
}

document.body.appendChild(component());