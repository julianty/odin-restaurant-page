import Logo from './JJKitchen.png';

function pageLoad() {
  function component(type, compClass=null, text=null) {
    const element = document.createElement(type);
    if (compClass) {
      element.classList.add(compClass);
    }
    if (text) {
      element.textContent = text;
    }
    
    return element
  }

  // Create Header
  const HeaderContainer = document.createElement('div');
  HeaderContainer.classList.add('header-container'); 
  const LogoContainer = component('div', 'logo');
  const LogoText = component('p', 'logo-text','Jen and Julian\'s Kitchen');
  const MyLogo = new Image();
  MyLogo.src = Logo;
  MyLogo.id = 'logo';
  LogoContainer.appendChild(MyLogo);
  LogoContainer.appendChild(LogoText);
  HeaderContainer.appendChild(LogoContainer);
  document.body.appendChild(HeaderContainer);

  // Create content container
  const ContentContainer = component('div', 'content-container');
  const TabAggregate = component('div', 'tab-aggregate');
  const TabContainer = component('div', 'tab-container');
  const AboutUsTab = component('h2', 'about-us', 'About Us');
  const MenuTab = component('h2', 'menu', 'Menu');
  const OrderTab = component('h2', 'order', 'Order');
  TabContainer.appendChild(AboutUsTab);
  TabContainer.appendChild(MenuTab);
  TabContainer.appendChild(OrderTab);
  TabAggregate.appendChild(TabContainer);
  const ActiveTabContainer = component('div', 'active-tab-container');
  TabAggregate.appendChild(ActiveTabContainer);
  ContentContainer.appendChild(TabAggregate);
  document.body.appendChild(ContentContainer);

  // Create footer
  const FooterContainer = component('div', 'footer-container');
  document.body.appendChild(FooterContainer);

  return ActiveTabContainer
}

export default pageLoad