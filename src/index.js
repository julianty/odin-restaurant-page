import './style.css';
import pageLoad from './pageLoad.js';
import writeAboutUs from './writeAboutUs';
import writeMenu from './writeMenu';
import writeOrder from './writeOrder'

// Load page
const ActiveTabContainer = pageLoad();
ActiveTabContainer.appendChild(writeAboutUs());

// Add listeners to tabs
const AboutUsTab = document.querySelector('.about-us');
const MenuTab = document.querySelector('.menu');
const OrderTab = document.querySelector('.order');

AboutUsTab.addEventListener('click', e => setActiveTab('about-us'));
MenuTab.addEventListener('click', e => setActiveTab('menu'));
OrderTab.addEventListener('click', e => setActiveTab('order'));

function setActiveTab(tab) {
  ActiveTabContainer.removeChild(ActiveTabContainer.firstChild);
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