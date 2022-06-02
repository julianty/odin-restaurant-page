function pageLoad() {
function component(type, compClass=null) {
  const element = document.createElement(type);
  if (compClass) {
    element.classList.add(compClass);
  }
  
  return element
}



const HeaderContainer = component('div', 'header-container');
HeaderContainer.textContent = 'Jen and Julian\'s Kitchen';


const ContentContainer = component('div', 'content-container');
const AboutUsContainer = component('div', 'about-us-container');
AboutUsContainer.textContent = `Our kitchen started as a passion
        project that carried our love for cooking meals together
        into a successful business. The story begins as a couple
        sits together at the dinner table in 2022 thinking: 
        "Oh. This is really good, and I think I can make it at home!" Many years
        later, and we are here serving the food that we grew up
        with.`

ContentContainer.appendChild(AboutUsContainer);

document.body.appendChild(HeaderContainer);
document.body.appendChild(ContentContainer);
}

export default pageLoad