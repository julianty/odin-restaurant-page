import './style.css';

function component(type, compClass=null) {
  const element = document.createElement(type);
  if (compClass) {
    element.classList.add(compClass);
  }
  
  return element
}

document.body.appendChild(component('div', 'content-container'));