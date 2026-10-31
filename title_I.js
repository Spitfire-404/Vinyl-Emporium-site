const template = document.createElement('div');

const text = await fetch('title.html').then(r => r.text());;
template.innerHTML = text;
template.className = "title"

document.getElementById("titleHere").replaceWith(template)
