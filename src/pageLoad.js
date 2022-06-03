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


  const ContentContainer = component('div', 'content-container');
 
  const TabContainer = component('div', 'tab-container');
  const AboutUsTab = component('button', 'about-us', 'About Us');
  const MenuTab = component('button', 'menu', 'Menu');
  const OrderTab = component('button', 'order', 'Order');
  TabContainer.appendChild(AboutUsTab);
  TabContainer.appendChild(MenuTab);
  TabContainer.appendChild(OrderTab);

  ContentContainer.appendChild(TabContainer);

  const ActiveTabContainer = component('div', 'active-tab-container');
  const DummyText = component('p', 'default-text', `Our kitchen started as a passion
          project that carried our love for cooking meals together
          into a successful business. The story begins as a couple
          sits together at the dinner table in 2022 thinking: 
          "Oh. This is really good, and I think I can make it at home!" Many years
          later, and we are here serving the food that we grew up
          with.`);
  ActiveTabContainer.appendChild(DummyText);
  ContentContainer.appendChild(ActiveTabContainer);

  document.body.appendChild(ContentContainer);
  return ActiveTabContainer
}

export default pageLoad