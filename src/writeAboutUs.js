export default function writeAboutUs() {
  const AboutUsText = document.createElement('p');
  AboutUsText.textContent = `Our kitchen started as a passion
          project that carried our love for cooking meals together
          into a successful business. The story begins as a couple
          sits together at the dinner table in 2022 thinking: 
          "Oh. This is really good, and I think I can make it at home!" Many years
          later, and we are here serving the food that we grew up
          with.`;
  return AboutUsText
}