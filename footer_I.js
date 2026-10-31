const template = document.createElement('footer');

const text = await fetch('footer.html').then(r => r.text());;
template.innerHTML = text;

document.getElementById("footerHere").replaceWith(template)
