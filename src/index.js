import './style.css';

function component(compClass) {
  const element = document.createElement('div');
  if (compClass) {
    element.classList.add(compClass);
  }
  
  return element
}

document.body.appendChild(component());