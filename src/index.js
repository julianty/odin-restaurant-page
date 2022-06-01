import './style.css';

function component(class) {
  const element = document.createElement('div');
  if (class) {
    element.classList.add(class);
  }
  
  return element
}

document.body.appendChild(component());