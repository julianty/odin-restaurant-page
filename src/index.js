import './style.css';
import pageLoad from './pageLoad.js';
import writeAboutUs from './writeAboutUs';
import writeMenu from './writeMenu';
import writeOrder from './writeOrder'

// Create Header
const HeaderContainer = document.createElement('div');
HeaderContainer.classList.add('header-container'); 
HeaderContainer.textContent = 'Jen and Julian\'s Kitchen';
document.body.appendChild(HeaderContainer);

const ActiveTabContainer = pageLoad();

// Add listeners to tabs
const AboutUsTab = document.querySelector('.about-us');
const MenuTab = document.querySelector('.menu');
const OrderTab = document.querySelector('.order');

AboutUsTab.addEventListener('click', e => setActiveTab('about-us'));
MenuTab.addEventListener('click', e => setActiveTab('menu'));
OrderTab.addEventListener('click', e => setActiveTab('order'));

function setActiveTab(tab) {
  ActiveTabContainer.removeChild(ActiveTabContainer.firstChild);
  // console.log(ActiveTabContainer);
  switch (tab) {
    case 'about-us':
      ActiveTabContainer.appendChild(writeAboutUs());
      break;
    case 'menu':
      ActiveTabContainer.appendChild(writeMenu());
      break;
    case 'order':
      ActiveTabContainer.appendChild(writeOrder());
  }
}