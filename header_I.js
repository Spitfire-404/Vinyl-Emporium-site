const template = document.createElement('header');

const text = await fetch('header.html').then(r => r.text());;
template.innerHTML = text;

document.getElementById("headerHere").replaceWith(template)
